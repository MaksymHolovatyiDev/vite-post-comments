import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {QueryClientProvider} from 'react-query';
import {Provider} from 'mobx-react';
import ReactDOM from 'react-dom/client';
import {App} from '@components/App.tsx';
import './index.css';
import {queryClient} from './queries';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
