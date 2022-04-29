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
