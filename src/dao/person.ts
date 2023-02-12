const dataBase = require('../db/db');

class PersonDAO {
  async createPerson(firstName: any, lastName: any, email: any) {
    const [id] = await dataBase('person')
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
      })
      .returning('id');
    return id;
  }
}
