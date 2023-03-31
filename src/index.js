import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Albums from './Components/Albums';
import { DataProvider } from './Components/DataContext';
import AlbumsCont from './Components/AlbumsCont';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DataProvider>
    <AlbumsCont />
    </DataProvider>
    {/* <Albums /> */}
  </React.StrictMode>
);
