import './styles/login-page.css'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Login = () => {
    return ( 
        <div className='login-page'>
            <h1>FlyBuyTickets</h1>
            <h2>З поверненням!</h2>
            <input type="text" placeholder='Логін'/>
            <input type="text" placeholder='Пароль'/>
            <a href=''>Забули пароль?</a>
            <Link to='/compare' className="login-button"><p>Buy & Fly!</p></Link>
            <p>Не маєте облікового запису? <a href="">Зареєструйтесь!</a></p>
        </div>
     );
}
 
export default Login;