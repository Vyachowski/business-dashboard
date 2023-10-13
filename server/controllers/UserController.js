import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import validator from 'validator';
import User from '../models/UserModel.js';

const secretKey = process.env.JWT_SECRET_KEY;

export async function registerUser(req, res) {
  const { name, password, email } = req.body;

  // Check if email is valid
  if (!validator.isEmail(email)) {
      return res.status(400).json({message: 'Invalid email address.'});
  }

  // Hash the password before storing it
  const hashedPassword = bcrypt.hashSync(password, 10);

  // Create a new user
  let newUser;
  try {
      newUser = await User.create({ name, email, password: hashedPassword });
  } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
          console.error(error);
          return res.status(400).json({message: 'Email is already registered'});
      }
      res.status(500).json({message: 'Something went wrong.'});
  }

  // Generate a JWT for the new user
  const token = jwt.sign({id: newUser.id, email: newUser.email}, secretKey, {
      expiresIn: '1h', // Token expires in 1 hour
  });

  // Set the JWT as an HTTP cookie
  res.cookie('token', token, {httpOnly: true});
  res.status(201).json({message: 'User registered successfully'});
}

export async function loginUser(req, res) {
  const { email, password } = req.body;

  // Find the user with the given email
  const user = await User.findOne({
    where: {
      email: email
    }
  });

  // Check if user exists and password is valid
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({message: 'Invalid credentials'});
  }

  // Generate an access token for the authenticated user
  const accessToken = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: '1h', // Token expires in 1 hour
  });

  // Generate a refresh token with a longer expiration time
  const refreshToken = jwt.sign({ id: user.id, email: user.email }, secretKey, {
    expiresIn: '7d', // Refresh token expires in 7 days
  });

  // Set the access token as an HTTP cookie
  res.cookie('token', accessToken, { httpOnly: true });

  // Set the refresh token as an HTTP cookie
  res.cookie('refreshToken', refreshToken, { httpOnly: true });

  // Server response if successful
  res.status(200).json({ message: 'Login successful' });
}

export async function refreshTokens(req, res) {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({message: 'Refresh token not found'});
  }

  jwt.verify(refreshToken, secretKey, (err, user) => {
    if (err) {
      return res.status(403).json({message: 'Refresh token verification failed'});
    }

    // Generate a new access token
    const accessToken = jwt.sign({id: user.id, username: user.username}, secretKey, {
      expiresIn: '1h', // New access token expires in 1 hour
    });

    // Set the new access token as an HTTP cookie
    res.cookie('token', accessToken, {httpOnly: true});

    res.status(200).json({message: 'Token refreshed successfully'});
  });
}

export async function logoutUser(req, res) {
  res.clearCookie('token');
  res.status(200).json({ message: 'Logout successful' });
}

export async function getUserProfile(req, res) {
  const { id, name, email } = req.user;
  res.status(200).json({ id, name, email });
}