import './styles/sidebar.css'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

import React, { useEffect } from 'react';

const Sidebar = () => {

    return ( 
        <nav className="sidebar">
                <div className="logo-container">
                    <img src="/fly-buy-tickets/images/sidebar/Logo.png" alt="Логотип компанії" />
                    <Link to='/registration'>
                        <p className="login">Вхід</p>
                    </Link>
                </div>

            <hr />

                <div className="logo-container item">
                    <img src="/fly-buy-tickets/images/sidebar/Home.png" alt="Логотип домашньої сторінки" className="icon" />
                    <Link to="/fly-buy-tickets" className='item'>
                        <p>Головна</p>
                    </Link>
                </div>


                <div className="logo-container item">
                    <img src="/fly-buy-tickets/images/sidebar/Sales.png" alt="Логотип знижок" className="icon" />
                    <Link to='/sales' className='item'>
                        <p>Акції та<br />знижки</p>
                    </Link>
                </div>

                <div className="logo-container item">
                    <img src="/fly-buy-tickets/images/sidebar/Questions.png" alt="Логотип питань" className="icon" />
                    <Link to='/about' className='item'>
                        <p>Про нас</p>
                    </Link>
                </div>

            <div className="logo-container item">
                <a href="#footer"><img src="/fly-buy-tickets/images/sidebar/Support.png" alt="Логотип підтримки" className="icon" /></a>
                <a href="#footer"><p>Зворотній<br />зв'язок</p></a>
            </div>
        </nav>
     );
}
 
export default Sidebar;