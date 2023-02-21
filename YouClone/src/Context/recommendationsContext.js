import React, { createContext, useState } from 'react'

export const RecommendationsContext = createContext()

const RecommendationsContextProvider = ({children}) => {
    const [activeTag, setactiveTag] = useState('All')

    return(
        <RecommendationsContext.Provider value={{activeTag, setactiveTag}}>
            {children}
        </RecommendationsContext.Provider>
    )
}

export default RecommendationsContextProvider