import React from "react";
import Albums from "./Components/Albums";
import AlbumsCont from "./Components/AlbumsCont"
import HookAlbums from "./Components/HookAlbums";
import HookAlbumsCont from "./Components/HookAlbumsCont";
import Ref from "./Components/Ref";

class App extends React.Component {

    render() {
        return( 
            <div>
                {/* <Albums /> */}
                {/* <AlbumsCont /> */}
                {/* <HookAlbums /> */}
                {/* <HookAlbumsCont /> */}
                <Ref />
            </div>
        )
    }
}


export default App