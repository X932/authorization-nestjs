export interface IUser {
  userName: string;
  password: string;
}

export class ResponseWrapper<T = null> {
  message: string = '';
  payload: T;
}
