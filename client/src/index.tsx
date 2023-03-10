import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './atoms/styles/output.css';
import { ToastContainer } from 'react-toastify';
import AuthContextProvider from './context/authContext/AuthContext';
import CategoriProvider from './context/CategoriContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <AuthContextProvider>
    <CategoriProvider>
      <App />
    </CategoriProvider>
    <ToastContainer />
  </AuthContextProvider>
  // <React.StrictMode>
  // </React.StrictMode>
);
