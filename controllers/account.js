const User = require('../models/User');
const { BadRequestError } = require('../errors');

// Get current loged in user info
const getCurrentUser = async (req, res) => {
  const user = req.user; // * Info stored in request object (Auth middleware)

  //! If user doesn't exist
  if (!user) {
    throw new UnauthenticatedError('User not authenticated');
  }
  res.status(200).send({ status: 'success', user });
};

const updateCurrentUser = async (req, res) => {
  //   const {
  //     body: { email },
  //     user: { userId },
  //   } = req;
  //   if (!email) {
  //     throw new BadRequestError('Please provide email');
  //   }
  //   const user = User.findOneAnd;
};
