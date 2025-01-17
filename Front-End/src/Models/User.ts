export class User {
  public first_name: string;
  public last_name: string;
  public email?: string;
  public password?: string;
  public role: string;
  public user_key?: number;
  constructor (
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    role: string,
    user_key: number
  ) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password = password;
    this.role = role;
    this.user_key = user_key;
  }
}