import React, { useState,createContext } from "react";

const Context = createContext(null)

function ContextProvider({ children }) {

    const [showModal, setShowModal] = useState(false)

    return (
        <Context.Provider value={{showModal,setShowModal}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }