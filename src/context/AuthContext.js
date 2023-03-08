import React from 'react'
import { useState } from 'react'

export const AuthContext  = React.createContext({
    isAuth: false,
    login: () => {}
})

const AuthContextProvider = props => {
    const [isAuthenticated, setIsauthenticated] = useState(false);
    
    const loginHandler = () => {
        const token = localStorage.getItem('accessToken');
        if(token !== null){
            setIsauthenticated(true);
        }
    };

    return (
        <AuthContext.Provider value={{login: loginHandler, isAuth: isAuthenticated}}>{props.children}</AuthContext.Provider>
    );
};

export default AuthContextProvider