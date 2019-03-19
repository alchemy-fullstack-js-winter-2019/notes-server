const { ManagementClient } = require('auth0');

const auth0 = new ManagementClient({
  domain: process.env.AUTH0_DOMAIN,
  clientId: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
  clientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
  audience: process.env.AUTH0_AUDIENCE,
  scope: 'read:users'
});

const getUser = nickname => {
  return auth0.getUsers({
    q: `nickname:${nickname}`
  })
    .then(users => {
      if(!users) return null;

      return {
        nickname: users[0].nickname,
        email: users[0].email,
        picture: users[0].picture
      };
    });
};

module.exports = {
  getUser
};
