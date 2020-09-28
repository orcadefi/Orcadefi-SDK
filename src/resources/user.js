import library from './library';

class User extends library.Base {
  static define() {
    this.attributes('token','refreshToken');
  }
}

export default library.createResource(User);
