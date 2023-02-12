import { Model } from 'objection';

class Person extends Model {
  id!: string;
  createdAt!: string;
  updatedAt!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  count!: string;

  $beforeInsert() {
    const now = new Date();
    this.createdAt = now.toISOString();
    this.updatedAt = now.toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }

  static get tableName() {
    return 'person';
  }

  static get modifiers() {
    return {
      orderByName(builder: any, _sort: string, _order: string) {
        builder.orderBy('first_name');
      },
    };
  }
}

export default Person;
