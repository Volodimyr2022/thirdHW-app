import React from "react";
import "../app.css"

class Ref extends React.Component {
  
    squareRef = React.createRef();
  
    
    componentDidMount(){
        console.log(this.squareRef.current)

        setTimeout(() => {

        // this.squareRef.current.style.transform="translate(200px)"
        this.squareRef.current.classList.add("move")
        
        }, 2000);
    }

   
    render(){
    return (
        <div 
            className="square"
            ref={this.squareRef} />
         
    )}
}

export default Ref