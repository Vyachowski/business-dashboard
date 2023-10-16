import BusinessMetrics from "../models/BusinessMetricsModel.js";
import User from '../models/UserModel.js';
import validator from 'validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import 'dotenv/config';

const secretKey = process.env.JWT_SECRET_KEY;

export async function registerUser(req, res) {
  const {fullName, password, email} = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  let createdUser;

  if (!validator.isEmail(email)) {
    return res.status(400).json({message: 'Invalid email address.'});
  }

  try {
    createdUser = await User.create({fullName, email, password: hashedPassword});
    if (!createdUser) {
      return res.status(500).json({message: 'User creation failed'});
    }
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      console.error(error);
      return res.status(400).json({message: 'Email is already registered'});
    }
    res.status(500).json({message: 'Something went wrong.'});
  }

  const accessToken = jwt.sign({id: createdUser.id, email: createdUser.email}, secretKey, {
    expiresIn: '1h',
  });

  const refreshToken = jwt.sign({id: createdUser.id, email: createdUser.email}, secretKey, {
    expiresIn: '7d',
  });

  res.status(201).json({message: 'User registered successfully', accessToken, refreshToken});
}

export async function loginUser(req, res) {
  const {email, password} = req.body;

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
  const accessToken = jwt.sign({id: user.id, email: user.email}, secretKey, {
    expiresIn: '1h',
  });

  // Generate a refresh token with a longer expiration time
  const refreshToken = jwt.sign({id: user.id, email: user.email}, secretKey, {
    expiresIn: '7d',
  });

  // Server response if successful
  res.status(200).json({
    message: 'Login successful',
    accessToken: accessToken,
    refreshToken: refreshToken,
  });
}

export async function getUserProfile(req, res) {
  const newAccessToken = req.newAccessToken || null;
  const {id, email} = req.user;
  const user = await User.findByPk(id);
  const fullName = user.fullName;
  res.status(200).json({id, fullName, email, newAccessToken});
}

export async function getBusinessMetrics(req, res) {
  // const newAccessToken = req.newAccessToken || null;
  const {id} = req.user;
  const businessMetrics = await BusinessMetrics.findByPk(id);
  const {
    totalRevenueGoal,
    ppcRevenueGoal,
    seoRevenueGoal,
    totalLeadCostGoal,
    ppcLeadCostGoal,
    seoLeadCostGoal,
    totalLeadAmountGoal,
    ppcLeadAmountGoal,
    seoLeadAmountGoal,
  } = businessMetrics;
  res.status(200).json({
    totalRevenueGoal,
    ppcRevenueGoal,
    seoRevenueGoal,
    totalLeadCostGoal,
    ppcLeadCostGoal,
    seoLeadCostGoal,
    totalLeadAmountGoal,
    ppcLeadAmountGoal,
    seoLeadAmountGoal,
  });
}

export async function addBusinessMetrics(req, res) {
  const { id } = req.user;
  const {
    totalRevenue,
    ppcRevenue,
    seoRevenue,
    totalLeadCost,
    ppcLeadCost,
    seoLeadCost,
    totalLeadAmount,
    ppcLeadAmount,
    seoLeadAmount,
  } = req.businessMetrics;

  BusinessMetrics.create({
    userId: id,
    totalRevenue: totalRevenue,
    ppcRevenue: ppcRevenue,
    seoRevenue: seoRevenue,
    totalLeadCost: totalLeadCost,
    ppcLeadCost: ppcLeadCost,
    seoLeadCost: seoLeadCost,
    totalLeadAmount: totalLeadAmount,
    ppcLeadAmount: ppcLeadAmount,
    seoLeadAmount: seoLeadAmount,
  }).then((businessMetric) => {
    console.log('New business metrics record created:', businessMetric);
  }).catch((error) => {
    console.error('Error while creating business metrics record:', error);
  });

  res.status(200).json({ message: "Business metrics added successfully!" });
}

