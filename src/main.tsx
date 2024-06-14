import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRoutes from './config/main_routes.tsx'
import { PrimeReactProvider } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <MainRoutes />
    </PrimeReactProvider>
  </React.StrictMode>,
)
