import './styles/login-page.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState } from 'react';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleFirstNameChange = (e) => {
      setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
      setLastName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
      setPhoneNumber(e.target.value);
    };
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const toggleForm = () => {
      setIsLogin(!isLogin);
      setPassword('');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
    };
  
    return ( 
        <div className='login-page'>
            <h1>FlyBuyTickets</h1>
            <h2>{isLogin ? 'З поверненням!' : 'Створіть обліковий запис'}</h2>
            {!isLogin && (
              <div className='registration'>
                <input
                  type="text"
                  placeholder='Прізвище'
                  value={lastName}
                  onChange={handleLastNameChange}
                />
                <input
                  type="text"
                  placeholder='Ім`я'
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
                <input
                  type="tel"
                  placeholder='Телефон'
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                />
              </div>
            )}

            <input type="text" placeholder='Логін' maxLength='15'/>
            <div className='password'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder='Пароль'
                    maxLength='24'
                />

                <button onClick={togglePasswordVisibility}>
                    {showPassword ? <img src="/fly-buy-tickets/images/login/show.png" alt="" /> : <img src="/fly-buy-tickets/images/login/hide.png" alt="" />}
                </button>
            </div>

            
            <a href=''><strong>Забули пароль?</strong></a>
            <Link to='/compare' className="login-button"><p>{isLogin ? 'Увійти' : 'Зареєструватися'}</p></Link>
            <p><strong>{isLogin ? "Не маєте облікового запису? " : "Вже маєте обліковий запис? "} </strong>
                <button onClick={toggleForm}>
                  {isLogin ? 'Зареєструйтесь!' : 'Увійти!'}
                </button>
            </p>
        </div>
     );
}
 
export default Login;
