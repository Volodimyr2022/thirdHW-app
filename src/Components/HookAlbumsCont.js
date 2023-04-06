import React, {useEffect, useState, useContext} from "react";
import { DataContext } from "./DataContext";

const HookAlbumsCont = () => {

    const context = useContext(DataContext)

    console.log(context)

    return (
        <DataContext.Consumer>
            {(context) => {
                return (context.map(({userId, id, title}) => 
                    <div key={id}>
                        {userId} {id} {title}
                    </div>
                ))} 
            }
            </DataContext.Consumer>
    )
        
}
export default HookAlbumsCont