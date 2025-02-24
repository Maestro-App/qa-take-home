/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUserLoginData {
    username: string;
    password: string;
  }
  
  export interface IBaseResponse {
    code: number;
    errors: string[];
    data: any;
  }