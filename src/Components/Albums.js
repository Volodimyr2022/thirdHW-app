
import React from 'react';
import { DataContext } from './DataContext';


class Albums extends React.Component {
  constructor(props) {
    super(props)
  this.state = { 
    albums: [],
    }
  };  

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => {
          console.log(response);
          const result = response.json();
          return result;
      })
      .then((result) => {
          console.log(result)
          this.setState({albums:result})
      })
      .catch((err) => {
          console.log(err)
      });      
  }

render() {
  return (
  <div>
    {this.albums.map(({userId, id, title}) =>
      <div key={id}>
        { userId }
      </div>
    )}
  </div>
  );
}
}

export default Albums;
