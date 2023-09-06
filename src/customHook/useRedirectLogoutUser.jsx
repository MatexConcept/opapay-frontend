
import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import authService from "../redux/features/auth/AuthService";
import { toast } from "react-toastify";


const useRedirectLogoutUser = (path) => {
    const navigate = useNavigate();

    useEffect(() => {
        let isLoggedIn;
        const redirectLoggedOutUser = async () => {
            try {
                isLoggedIn = await authService.getLoginStatus()
            }catch (error){
                console.error(error.message)
            }

            if(!isLoggedIn) {
                toast.info("Session Expired, Please login")
                navigate(path)

                return;
            }
        };
        redirectLoggedOutUser()
    },[path, navigate]);
}

export default useRedirectLogoutUser