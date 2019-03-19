module.exports = {
  getUser() {
    return Promise.resolve({
      nickname: 'test.user',
      email: 'test@test.com',
      sub: '1234'
    });
  }
};
