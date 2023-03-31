import React from 'react';
import { DataContext } from './DataContext';


const AlbumsCont = () => {
  
  return (
  <div>
    <DataContext.Consumer>
        {(context) => {
            console.log(context)
        }
        }
    </DataContext.Consumer>
  </div>
  );

}

export default AlbumsCont;