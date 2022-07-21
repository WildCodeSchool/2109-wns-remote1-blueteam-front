export interface IUserRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserWithoutPassword {
  email :string;
}

// Typing of the role key in IUser
export enum IRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  job: string;
  email: string;
  role: unknown; // unknown for now, but need to be relaced by IRole
}

export interface IUserChangePassword {
  token : string,
  password : string
}
