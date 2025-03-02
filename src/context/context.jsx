import React, { useContext, useState } from 'react'

const context = ({ children }) => {
    const [data, setData] = useState({ name: "Ankit" })
    const UserData = useContext();

    return (
        <UserData.Provider value={{ data, setData }}>
            {children}
        </UserData.Provider>
    )
}

export default context