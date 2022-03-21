import React, { createContext, useState } from "react";

export const LayoutContext = createContext()

const LayoutProvider = ({ children }) => {
    const [title, setTitle] = useState("")
    return (
        <LayoutContext.Provider value={{
            title: title,
            setTitle: setTitle
        }}>{children}</LayoutContext.Provider>
    )
}

export default LayoutProvider;