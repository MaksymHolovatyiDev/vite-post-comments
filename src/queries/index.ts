import {AddComment, AuthQuery, EditReq, UseId} from '@/Types';
import axios from 'axios';
import {QueryClient} from 'react-query';

export const queryClient = new QueryClient();

axios.defaults.baseURL = import.meta.env.VITE_BACKEND;

export const userRegister = ({name, email, password}: AuthQuery) =>
  axios.post('auth/SignUp', {name, email, password});

export const userLogIn = ({email, password}: AuthQuery) =>
  axios.post('auth/LogIn', {email, password});

export const getAllComments = async () => (await axios.get('chat/all')).data;

export const addNewComment = ({text}: AddComment) =>
  axios.post('chat/add', {text});

export const deleteUserComment = (_id: string) =>
  axios.delete(`chat/delete/${_id}`);

export const editComment = ({_id, text}: EditReq) =>
  axios.patch('chat/edit', {_id, text});

export const reply = ({_id, text}: EditReq) =>
  axios.post('chat/reply', {_id, text});

export const voteUp = ({_id}: UseId) => axios.patch('chat/voteUp', {_id});
export const voteDown = ({_id}: UseId) => axios.patch('chat/voteDown', {_id});
