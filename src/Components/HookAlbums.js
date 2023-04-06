import React, {useEffect, useState} from "react";
import { DataContext } from "./DataContext";

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
            setAlbums(result)
        })
        .catch((err) => {
            console.log(err)
        });  
    }, [])

    return (
        <div>
            {
            (albums.map(({userId, id, title}) => {
                return (
                    <div key={id}>
                        {userId} {id} {title}
                    </div>
                )
            }))
            }
        </div>
    )
        
}
export default HookAlbums