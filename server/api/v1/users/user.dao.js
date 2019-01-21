const User = require('./user.entity');

const login = (info) => {
  console.log('user data for Login: ', info);

  return new Promise((resolve, reject) => {
    let user = new User();

    user.find(info, (error, userData) => {
      if (error) reject({
        message: 'Login Failed.',
        status: 500
      });

      else resolve({
        message: 'Login Success.',
        status: 201,
        userData: userData
      });
    });
  });
};

const register = (info) => {
  console.log('user data for Register: ', info);

  return new Promise((resolve, reject) => {
    let user = new User(info);

    user.save((error, userData) => {
      if (error) reject({
        message: 'Registration Failed.',
        status: 500
      });

      else resolve({
        message: 'Registration Success.',
        status: 201,
        userData: userData.userName
      });
    });
  });
};

module.exports = {
  login,
  register
};