import React from "react";
import "../app.css"

class Ref extends React.Component {
  
    squareRef = React.createRef("");
  
    
    componentDidMount(){
        console.log(this.squareRef.current)

        // this.squareRef.current.setTimeout(() => {
            
        // ВОТ ЗДЕСЬ ДОЛЖЕН БЫТЬ КОД КОТОРЫЙ ДОБАВЛЯЕТ СТИЛЬ transform: translate(200px)
        //  В КЛАСС square? 

        // }, 2000);
    }
  
    render(){
    return (
        <div 
            className="square"
            ref={this.squareRef} 
        > </div>
    )}
}

export default Ref