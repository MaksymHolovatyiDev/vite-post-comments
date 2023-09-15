import {MainRoutes} from './routes';

export enum InputButtonText {
  Send = 'Send',
  Reply = 'Reply',
}

export const login = {
  data: [
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'password',
      type: 'password',
    },
  ],
  initialValues: {email: '', password: ''},
  buttonText: 'Log In',
  linkText: 'Register',
  link: MainRoutes.Register,
};

export const register = {
  data: [
    {
      name: 'name',
      type: 'text',
    },
    ...login.data,
  ],
  initialValues: {name: '', ...login.initialValues},
  buttonText: 'Register',
  linkText: 'Log In',
  link: MainRoutes.LogIn,
};
