import './../css/login_default.css';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Login_default = () => {
    const {api} = useContext(MyContext);

    return(
        <div className='login_default_container'>
            asdf
        </div>
    )
}

export default Login_default;