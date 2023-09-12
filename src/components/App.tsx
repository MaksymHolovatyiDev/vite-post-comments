import '@/App.css';
import store from '@/store';
import {observer} from 'mobx-react';
import {Auth} from './Auth/Auth';
import Comments from './Comments/Comments';

export const App = observer(() => {
  return store.getToken ? <Comments /> : <Auth />;
});
