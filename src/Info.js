import './styles/info.css'

const Info = () => {
    
    return ( 
        <div className="info">
            <div className="info-box">
                <img src="/fly-buy-tickets/images/info/globe.png" alt="Глобус, подорожуйте з нами" />
                <p className="info-title">Розкрийте світ з нами</p>
                <p className="info-text">
                    Дізнайтеся про найкращі пропозиції авіарейсів до будь-яких куточків світу і 
                    вирушайте у подорож з нашою авіакомпанією.
                </p>
            </div>

            <div className="info-box">
                <img src="/fly-buy-tickets/images/info/package.png" alt="Асортимент, порівнюйте та обирайте найкраще" />
                <p className="info-title">Порівнюйте та обирайте</p>
                <p className="info-text">
                    Порівнюйте пропозиції авіаквитків від понад тисячі авіакомпаній, щоб ви могли 
                    вибрати найдешевший, найшвидший рейс.
                </p>
            </div>

            <div className="info-box">
                <img src="/fly-buy-tickets/images/info/clock.png" alt="Годинник, збережіть свій час" />
                <p className="info-title">Знайдіть ідеальний час</p>
                <p className="info-text">
                    Дізнайтеся, коли найдешевший місяць або день для перельоту і налаштуйте цінові 
                    оповіщення, щоб забронювати рейс за потрібною ціною.
                </p>
            </div>
        </div>
     );
}
 
export default Info;