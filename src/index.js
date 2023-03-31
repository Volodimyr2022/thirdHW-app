import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Albums from './Components/Albums';
import { DataProvider } from './Components/DataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
    <Albums />
    </DataProvider>
  </React.StrictMode>
);
