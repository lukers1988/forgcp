import { Outlet } from "react-router"

const Auth = () => {
    return <div className="flex align-items-center justify-content-center">
            <Outlet />
    </div>
}

export default Auth;
