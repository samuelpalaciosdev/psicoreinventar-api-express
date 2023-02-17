// Get current loged in user info
const getCurrentUser = async (req, res) => {
  const user = req.user; // * Info stored in request object (Auth middleware)

  //! If user doesn't exist
  if (!user) {
    throw new UnauthenticatedError('User not authenticated');
  }
  res.status(200).send({ status: 'success', user });
};
