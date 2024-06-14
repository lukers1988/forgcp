import React from 'react'
import ReactDOM from 'react-dom/client'
import MainRoutes from './config/main_routes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainRoutes />
  </React.StrictMode>,
)
