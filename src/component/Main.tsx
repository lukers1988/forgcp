import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/UserReducer';


const Main = () => {
    const loggedInUser = useSelector((state: any) => state.user.user);
    const dispatch = useDispatch();

    const handleLogout = () => {
        signOut(auth);
        dispatch(logout());
    }

    return  <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" /><br/>
        {!loggedInUser && <>
            <Link to={'/auth/login'}>Login</Link><br/>
            <Link to={'/auth/register'}>Register</Link>
        </>}
        {loggedInUser && <Button icon="pi pi-logout" onClick={handleLogout}>Logout</Button>}
    </div>
}

export default Main;