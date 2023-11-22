import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../../services/authService';
import Path from '../../paths';
import AuthContext from "../../context/AuthContext";


export default function Logout ()  {
    const navigate = useNavigate();
    const { logOutHandler } = useContext(AuthContext)

    useEffect(() => {
        authService.Logout()
            .then(() => logOutHandler())
            .catch(() => navigate(Path.Home))
    }, [])
    return null;
}