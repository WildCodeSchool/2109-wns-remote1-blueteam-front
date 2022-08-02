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

export interface IUserUpdate {
  avatar?: { set: string };
  firstname?: { set: string };
  lastname?: { set: string };
  job?: { set: string };
  email?: { set: string };
  // password: string;
}

// Typing of the role key in IUser
export enum IRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface IUser {
  id: string;
  avatar: string;
  firstname: string;
  lastname: string;
  job: string;
  email: string;
  role: IRole; // unknown for now, but need to be relaced by IRole
}
