import './styles/sidebar.css'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Sidebar = () => {
    return ( 
        <nav className="sidebar">
            <Link to='/registration'>
                <div className="logo-container">
                    <img src="/fly-buy-tickets/images/sidebar/Logo.png" alt="Логотип компанії" />
                    <p className="login">Вхід</p>
                </div>
            </Link>

            <hr />

            <Link to="/fly-buy-tickets">
                <div className="logo-container item">
                    <img src="/fly-buy-tickets/images/sidebar/Home.png" alt="Логотип домашньої сторінки" className="icon" />
                    <p>Головна</p>
                </div>
            </Link>

            <div className="logo-container item">
                <a href=".#sales"><img src="/fly-buy-tickets/images/sidebar/Sales.png" alt="Логотип знижок" className="icon" /></a>
                <a href=".#sales"><p>Акції та<br />знижки</p></a>
            </div>

            <Link to='/about'>
                <div className="logo-container item">
                    <img src="/fly-buy-tickets/images/sidebar/Questions.png" alt="Логотип питань" className="icon" />
                    <p>Про нас</p>
                </div>
            </Link>

            <div className="logo-container item">
                <a href="#footer"><img src="/fly-buy-tickets/images/sidebar/Support.png" alt="Логотип підтримки" className="icon" /></a>
                <a href="#footer"><p>Зворотній<br />зв'язок</p></a>
            </div>
        </nav>
     );
}
 
export default Sidebar;