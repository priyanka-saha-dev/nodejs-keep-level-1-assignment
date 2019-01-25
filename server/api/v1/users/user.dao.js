const User = require('./user.entity');

const login = (info) => {
  console.log('user data for Login: ', info);

  return new Promise((resolve, reject) => {
    User.findOne(info, (error, userData) => {

      if (error) reject({
        message: 'Login Failed.',
        status: 500
      });

      if(!userData) reject({
        message: 'Login Failed. User does not Exist.',
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
  
  return new Promise((resolve, reject) => {
    let user = new User(info);

    console.log('user data for Register: ', user);
    user.save((error, userData) => {
      if (error) {
        console.log('Error occured in DAO', error);

        if(error.message.includes('duplicate')) {
          reject({
            message: 'Registration Duplicate.',
            status: 500
          });
        } else {
          reject({
            message: 'Registration Failed.',
            status: 500
          });
        }

      } else {
        console.log('Success occured in DAO');
        resolve({
          message: 'Registration Success.',
          status: 201,
          userData: userData.userName
        });
      }
    });
  });
};

module.exports = {
  login,
  register
};