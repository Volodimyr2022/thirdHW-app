import React from 'react';

export const DataContext = React.createContext();

export class DataProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            albums: [],
            };
    }
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
            <DataContext.Provider value={ this.state.albums } >
                {this.props.children}
            </DataContext.Provider>
        ); 
    }
};