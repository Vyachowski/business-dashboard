import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const secretKey = process.env.JWT_SECRET_KEY;

function authenticateJWT(req, res, next) {
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;
  if (!accessToken) {
    return res.status(401).json({ message: 'Access token not found' });
  }

  jwt.verify(accessToken, secretKey, (err, user) => {
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
        const newAccessToken = jwt.sign({ id: user.id, fullName: user.fullName }, secretKey, {
          expiresIn: '1h', // New access token expires in 1 hour
        });

        // Set the new access token as an HTTP cookie
        res.cookie('accessToken', newAccessToken, { httpOnly: true });

        // Attach the user information to the request
        req.user = user;
        next();
      });
    } else {
      // Access token is valid
      req.user = user;
      next();
    }
  });
}
export default authenticateJWT;
