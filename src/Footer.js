import './styles/footer.css'

const Footer = () => {
    return ( 
        <footer className="footer" id="footer">
            <p className="empty-field"></p>
            <p className="mobile">
                Телефон обслуговування:<br /><br />
                +38 (063) - 83 - 82 - 64<br />
                +38 (097) - 83 - 82 - 64
            </p>

            <p className="email">
                Електронна пошта запитань<br />і відповідей:<br /><br />
                flybuytickets.qanda@gmail.com
            </p>

            <div className="social-medias">
                <p>
                    Соціальні мережі:
                </p>
                <a href='https://web.telegram.org'>
                    <img src="/fly-buy-tickets/images/footer/telegram.png" alt="Our telegram" />
                </a>

                <a href="https://www.viber.com/en/">
                    <img src="/fly-buy-tickets/images/footer/viber.png" alt="Our instagram" />
                </a>

                <a href="https://www.instagram.com">
                    <img src="/fly-buy-tickets/images/footer/instagram.png" alt="Our instagram" />
                </a>
            </div>

            <hr />

            <p>
                © FlyBuyTickets 2023<br />
                Сервіс авіабілетів
            </p>

            <p></p>

            <p className="footer-right">
                Політика конфіденційності<br />Партнери
            </p>
        </footer>
     );
}
 
export default Footer;