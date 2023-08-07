import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";


const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [token, setToken] = useLocalStorage("token", "");
    const [user, setUser] = useLocalStorage("user", {
        pseudo: "",
        email: "",
        password: "",
        favorites: []
    });

    return (
        <UserContext.Provider value={{ user, setUser, token, setToken }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;