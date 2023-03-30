import React from 'react';

export const DataContext = React.createContext();

export const DataProvider = (props) => {
    const data = {
        
    };

    return ( <DataContext.Provider value={{}}>
        {props.children}
    </DataContext.Provider>
    );
};