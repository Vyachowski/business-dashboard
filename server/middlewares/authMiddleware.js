import jwt from 'jsonwebtoken';
import User from "../models/UserModel.js";
import dotenv from 'dotenv';
dotenv.config();

const secretKey = process.env.JWT_SECRET_KEY;

function authenticateJWT(req, res, next) {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken) {
    return res.status(401).json({ message: 'Access token not found' });
  }

  jwt.verify(accessToken, secretKey, async (err, user) => {
    if (err) {
      // Access token verification failed
      if (!refreshToken) {
        return res.status(403).json({ message: 'Token verification failed' });
      }

      // Attempt to refresh the access token using the refresh token
      jwt.verify(refreshToken, secretKey, (err, user) => {
        if (err) {
          return res.status(403).json({ message: 'Refresh token verification failed' });
        }

        // Generate a new access token
        const newAccessToken = jwt.sign({ id: user.id, email: user.email }, secretKey, {
          expiresIn: '1h', // New access token expires in 1 hour
        });

        // Attach the user information and auth tokens to the request
        req.accessToken = newAccessToken;
        req.refreshToken = refreshToken;
        req.user = user;
        next();
      });
    } else {
      // Access token is valid
      const foundUser = await User.findOne({
        where: {
          id: user.id,
        },
      });

      if (!foundUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      // Attach the user information to the request
      req.user = foundUser;
      next();
    }
  });
}
export default authenticateJWT;
