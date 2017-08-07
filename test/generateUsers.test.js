const expect = require('chai').expect;
const generateUsers = require('../routes/users').generateUsersArray;

describe('users generated', function () {

  it('should generate user', function () {

    const users = generateUsers(10);

    expect(users).to.have.lengthOf(10);

    users.forEach((user) => {
      expect(user).to.have.property('firstName');
      expect(user).to.have.property('lastName');
      expect(user).to.have.property('username');
      expect(user).to.have.property('email');
    });

  });
});
