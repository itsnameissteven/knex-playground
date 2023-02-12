import Person from '../models/person.model';
interface CreatePersonArgs {
  firstName: string;
  lastName: string;
  email: string;
}
class PersonService {
  async createPerson({ firstName, lastName, email }: CreatePersonArgs) {
    const id = await Person.query()
      .insert({
        firstName,
        lastName,
        email,
      })
      .returning('id');

    return id;
  }
  async getAllPersons() {
    return await Person.query().returning('*');
  }
}

const personService = new PersonService();

export default personService;
