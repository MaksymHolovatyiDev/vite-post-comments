import {AuthQuery} from '@/Types';
import axios from 'axios';
import {QueryClient} from 'react-query';

export const queryClient = new QueryClient();

axios.defaults.baseURL = import.meta.env.VITE_BACKEND;

export const userRegister = ({name, email, password}: AuthQuery) =>
  axios.post('auth/SignUp', {name, email, password});

export const userLogIn = ({email, password}: AuthQuery) =>
  axios.post('auth/LogIn', {email, password});
