import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const TokenCheck = ({ children }) => {
    const navigate = useNavigate();

    useEffect(() => {
        checkUserToken();
    })

    const getUserPermissions = async () => {
        try {
            navigate(`/home`)
        } catch (err) {
            console.log(err);
        }
    }

    const checkUserToken = () => {
        const token = localStorage.getItem("token");
        if (token) {
            getUserPermissions();
        }
    }



    return (
        <>
            {children}
        </>
    )
}

export default TokenCheck;