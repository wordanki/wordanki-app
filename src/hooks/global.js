import { createContext, useContext, useEffect, useState } from 'react'

import Information from '../database/models/Information'

const GlobalContext = createContext({})

export const GlobalProvider = ({ children }) => {
    const [level, setLevel] = useState(0)

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

    return (
        <GlobalContext.Provider value={{
            level,
            setLevel,
            informations
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobal = () => useContext(GlobalContext)