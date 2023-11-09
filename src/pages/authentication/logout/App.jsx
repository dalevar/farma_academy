import { Navigate } from "react-router-dom";
import logout from "../../../services/auth/logout"

export default function LogoutPage() {

    logout()

    return (
        <Navigate to={'/'} />
    )
}