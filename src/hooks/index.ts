import {useMutation} from 'react-query';
import {MainRoutes} from '@/environment/routes';
import {userLogIn, userRegister} from '@/queries';
import store from '@/store';
import Notiflix from 'notiflix';
import axios from 'axios';

export const useAuth = (pathname: string) => {
  const query = pathname === MainRoutes.Register ? userRegister : userLogIn;
  return useMutation(query, {
    onSuccess: res => {
      store.setData(res.data.access_token, res.data._id);
      axios.defaults.headers.common = {
        Authorization: `Bearer ${res.data.access_token}`,
      };
    },
    onError: () =>
      Notiflix.Notify.warning('Incorrect email or password!', {
        clickToClose: true,
        timeout: 2000,
      }),
  });
};
