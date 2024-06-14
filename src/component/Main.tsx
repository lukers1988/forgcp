import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';


const Main = () => {
    return  <div className="card flex justify-content-center">
        <Button label="Check" icon="pi pi-check" /><br/>
        <Link to={'/auth/login'}>Login</Link><br/>
        <Link to={'/auth/register'}>Register</Link>
    </div>
}

export default Main;