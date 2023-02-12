const personDAO = require('../dao/person');

class PersonService {
  createPerson({ firstName, lastName, email }: any) {
    return personDAO.createPerson(firstName, lastName, email);
  }
}

module.exports = new PersonService();
