import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRoutes from './config/main_routes.tsx'
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <MainRoutes />
      </PrimeReactProvider>
    </Provider>
  </React.StrictMode>,
)
