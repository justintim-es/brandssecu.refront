export interface IAction<T> {
  type: string;
  payload?: T;
  component: string;
}
export interface IActionCreator<T> {
  payload?: T;
  component: string;
}
export interface ILoginFetch {
  username: string;
  password: string;
  clientCredentials: string;
}
export interface IRegisterBrandFetch {
  brandName: string;
  email: string;
  password: string;
}
