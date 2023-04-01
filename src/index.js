import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Albums from './Components/Albums';
import { DataProvider } from './Components/DataContext';
import AlbumsCont from './Components/AlbumsCont';
import HookAlbums from './Components/HookAlbums';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <DataProvider>
    <AlbumsCont />
    </DataProvider> */}
    {/* <Albums /> */}
    <HookAlbums />
  </React.StrictMode>
);
