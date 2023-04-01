import React, {useEffect, useState} from "react";

const HookAlbums = () => {

    const [albums, setAlbums] = useState([])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then((response) => {
            console.log(response);
            const result = response.json();
            return result;
        })
        .then((result) => {
            console.log(result)
            setAlbums({albums:result})
        })
        .catch((err) => {
            console.log(err)
        });  
    })

    return (
        <div>
            
        </div>
    )
        
}
export default HookAlbums