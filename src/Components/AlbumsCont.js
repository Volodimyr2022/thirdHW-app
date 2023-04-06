import React from 'react';
import { DataContext } from './DataContext';


const AlbumsCont = () => {
  
  return (
    <DataContext.Consumer>
     {
      context => {
        console.log(context)
      return context.map(({userId, id, title}) => 
          <div key={id}>
            {userId} {id} {title}
          </div>
        ) 
      }}
    </DataContext.Consumer>
  );

}

export default AlbumsCont;