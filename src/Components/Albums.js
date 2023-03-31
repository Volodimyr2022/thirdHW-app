
import React from 'react';
import { DataContext } from './DataContext';


class Albums extends React.Component {

  render() {
  return (
  <div>
    <DataContext.Consumer>
      {this.state.albums.map(({userId, id, title}) =>
        <div key={id}>
          {userId} {id} {title}
        </div>
      )}
    </DataContext.Consumer>
  </div>
  );
  }
}

export default Albums;

