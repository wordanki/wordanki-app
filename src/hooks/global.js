import { createContext, useContext, useEffect, useState } from 'react'

import Information from '../database/models/Information'

import localStorage from '../helpers/localStorage' 

const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
    const [level, setLevel] = useState(0)
    const [firstTime, setFirstTime] = useState(true)

    const [informations, setInformations] = useState()

    useEffect(() => {
        Information
            .findTheOne()
            .then(response => {
                setLevel(response.level)

                setInformations({
                    version: response.version
                })
            })
    }, [])

    useEffect(() => {
        localStorage
            .getData("user.first-times").then(_ =>  setFirstTime(false)).catch(_ => setFirstTime(true))
    }, [])

    return (
        <GlobalContext.Provider value={{
            level,
            setLevel,
            firstTime,
            setFirstTime,
            informations
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)