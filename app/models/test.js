import Model from '@ember-data/model';
import { attr } from '@ember-data/model';
import Validator from 'ember-model-validator/decorators/model-validator';

@Validator
export default class TestModel extends Model {
  @attr username;
  @attr password;

  validations = {
    username: {
      presence: true,
    },
    password: {
      presence: true,
    },
  };
}
