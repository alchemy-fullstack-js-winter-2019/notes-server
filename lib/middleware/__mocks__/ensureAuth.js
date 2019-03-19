module.exports = () => (req, res, next) => {
  req.user = {
    nickname: 'test.user'
  };
  next();
};
