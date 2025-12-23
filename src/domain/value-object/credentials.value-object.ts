export class Credentials {
  constructor(
    public readonly username: string,
    public readonly password: string,
  ) {
    if (!username) {
      throw new Error('username cannot be empty');
    }
    if (!password) {
      throw new Error('password cannot be empty');
    }
  }
}
