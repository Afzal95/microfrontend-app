import React, { createContext, useContext, useState } from 'react';

const SharedContext = createContext();

export function useSharedContext() {
    return useContext(SharedContext);
}

export function SharedProvider({ children }) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decreamentCount = () => {
        setCount(prevCount => prevCount - 1);
    };

    const resetCount = ()=>{
        setCount(0);
    }

    return (
        <SharedContext.Provider value={{ count, incrementCount, decreamentCount, resetCount }}>
            {children}
        </SharedContext.Provider>
    );
}