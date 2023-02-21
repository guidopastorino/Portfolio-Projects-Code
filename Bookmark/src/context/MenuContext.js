import React, { useState } from 'react'
import { createContext } from "react";

export const MenuContext = createContext()

const MenuContextProvider = ({children}) => {

    const [menuActive, setMenuActive] = useState(false)

    return(
        <MenuContext.Provider value={{
            menuActive,
            setMenuActive
        }}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider