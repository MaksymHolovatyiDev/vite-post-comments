import {useMutation} from 'react-query';
import {MainRoutes} from '@/environment/routes';
import {userLogIn, userRegister} from '@/queries';
import store from '@/store';
import Notiflix from 'notiflix';

export const useAuth = (pathname: string) => {
  const query = pathname === MainRoutes.Register ? userRegister : userLogIn;
  return useMutation(query, {
    onSuccess: token => {
      store.setToken(token.data.access_token);
    },
    onError: () =>
      Notiflix.Notify.warning('Incorrect email or password!', {
        clickToClose: true,
        timeout: 2000,
      }),
  });
};
