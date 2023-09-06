import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/features/auth/AuthSlice";


export const ShowOnLogin = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if (isLoggedIn) {
        return <>
            {children}
        </>
    }

    return null
};


export const ShowOnLogout = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if (!isLoggedIn) {
        return <>
            {children}
        </>
    }

    return null
};


export const AdminAuthorLink = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUser)

    if (isLoggedIn && (user?.role === "admin" || user?.role === "author")) {
        return <>
            {children}
        </>
    }

    return null
};
export const Verified = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const user = useSelector(selectUser)

    if (isLoggedIn && (user?.isVerified === true)) {
        return <>
            {children}
        </>
    }

    return null
};