import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

const TokenCheck = ({ children }) => {
    const navigate = useNavigate();

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

    useEffect(() => {
        checkUserToken();
    }, [])


    return (
        <>
            {children}
        </>
    )
}

export default TokenCheck;