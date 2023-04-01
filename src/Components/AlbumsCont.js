import React from 'react';
import { DataContext } from './DataContext';


const AlbumsCont = () => {
  
  return (
  <div>
    <DataContext.Consumer>
      {({albums}) => {
        albums.map(({userId, id, title}) => {
          return (
          <div key={id}>
            {userId} {id} {title}
          </div>
        )
        })
      }}
    </DataContext.Consumer>
  </div>
  );

}

export default AlbumsCont;