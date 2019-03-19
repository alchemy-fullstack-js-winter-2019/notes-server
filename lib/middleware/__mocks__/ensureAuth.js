module.exports = () => (req, res, next) => {
  req.user = {
    username: 'test.user'
  };
  next();
};
