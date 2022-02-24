export interface IUserRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

export interface IUserLogin{
  email: string,
  password: string,
}

export interface IUser{
  id: number,
  firstname: string,
  lastname: string,
  job: string,
  email: string,
  role:string
}
