import './styles/pay.css'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react';

const Pay = () => {

    const [flights, setFlight] = useState([
        {title: 'Київ, Бориспіль - Варшава, Модлін 1231231312', time: '13.11.23 14:00', place: '3A', price: 600, id: 1},
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '13.11.23 19:30', place: '15D', price: 700, id: 2},
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '14.11.23 15:00', place: '8C', price: 750, id: 3},
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '15.11.23 14:00', place: '12A', price: 600, id: 4},
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '15.11.23 14:00', place: '6B', price: 600, id: 5}
    ])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    return ( 
        <div className="pay">
            <h1>Оплата квитків</h1>

            {flights.map((flight) => (
                <div className='tickets-list' key={flight.id}>
                    <h2>Рейс:</h2>
                    <h2> {flight.title}</h2>
                    
                    <h2>Час:</h2>
                    <h2>{flight.time}</h2>
                    
                    <h2>Місце:</h2>
                    <h2>{flight.place}</h2>
                    
                    <h2>Ціна:</h2>
                    <h2>{flight.price} грн</h2>

                    <img src="/images/pay/trash.png" alt="Видалити квиток" />
                </div>
            ))}

            <div className='pay-data'>
                <h2>Дані оплати:</h2>
                <div className='pay-info'>
                    <p>Божик Назар Володимирович</p>
                    <p>+380930029114</p>
                    <img src="/images/filters/Arrows.png" alt="Змінити дані" />
                    <Link className='change-method'>Змінити дані</Link>
                </div>

                <h2>Метод оплати:</h2>
                <div className='pay-method'>
                    <input type="radio" />
                    <img src="/images/pay/mastercard-visa.png" alt="MasterCard Visa" />
                    <input type="radio" />
                    <img src="/images/pay/g-apple-pay.png" alt="G-Pay Apple-Pay" />
                </div>

                <div className='confirmation'>
                    <input type="checkbox" />
                    <p>Надаю дозвіл на обробку моїх даних</p>
                </div>
                
                <Link to='' className='pay-button'><p>Оплатити</p></Link>
            </div>


        </div>
     );
}
 
export default Pay;