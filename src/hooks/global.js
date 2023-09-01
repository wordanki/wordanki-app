import { createContext, useContext, useEffect, useState } from 'react'

import Language from '../database/models/Language'

import localStorage from '../helpers/localStorage' 

const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
    const [level, setLevel] = useState(0)
    const [firstTime, setFirstTime] = useState(true)
    const [language, setLanguage] = useState(true)

    useEffect(() => {
        Language.findById(1).then(response => {
            setLevel(response.level)

            setLanguage({
                from: response.froml,
                to: response.tol
            })
        })
    }, [])

    useEffect(() => {
        localStorage
            .getData("user.first-time").then(_ =>  setFirstTime(false)).catch(_ => setFirstTime(true))
    }, [])

    return (
        <GlobalContext.Provider value={{
            level,
            setLevel,
            firstTime,
            setFirstTime,
            language
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)