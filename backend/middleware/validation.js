const { body, validationResult } = require('express-validator');

// Validation for signup
const validateSignup = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required'),

  body('email')
    .isEmail()
    .withMessage('Please enter a valid email'),

  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  body('roleName')
    .notEmpty()
    .withMessage('Role is required')
    .isIn(['admin', 'caretaker', 'member'])
    .withMessage('Invalid role selection'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

// Validation for login
const validateLogin = [
  body('email')
    .isEmail()
    .withMessage('Please enter a valid email'),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = { validateSignup, validateLogin };
