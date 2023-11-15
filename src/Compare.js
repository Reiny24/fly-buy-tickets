import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './styles/compare.css'

const Compare = () => {
    const [flights, setFlight] = useState([
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '13.11.23 14:00', place: 18, econom: 600, business: 800, first: 1000, id: 1},
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '13.11.23 19:30', place: 25, econom: 700, business: 900, first: 1100, id: 2},
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '14.11.23 15:00', place: 16, econom: 750, business: 950, first: 1150, id: 3},
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '15.11.23 14:00', place: 29, econom: 600, business: 800, first: 1000, id: 4},
        {title: 'Київ, Бориспіль - Варшава, Модлін', time: '15.11.23 14:00', place: 8,  econom: 600, business: 800, first: 1000, id: 5}
    ])

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    const dataToSend = 123;

    return ( 
        <div className="compare">
            <p className='compare-title'>Порівняння рейсів</p>

            {flights.map((flight) => (
                <div className='compare-flight' key={flight.id}>
                    <div className="flight-info">
                        <h1>Рейс:</h1>
                        <h1> {flight.title}</h1>
                        
                        <h2>Час:</h2>
                        <h2>{flight.time}</h2>
                        
                        <h2>Місця:</h2>
                        <h2>{flight.place} вільних</h2>
                        
                        <h2>Ціна:</h2>
                        <h1>{flight.econom}, {flight.business}, {flight.first} грн</h1>
                    </div>

                    <Link to={{ pathname: '/places', state: {flightData: flight} }} className="buy-ticket"><h2>Купити</h2></Link>
                </div>
            ))}
        </div>
     );
}
 
export default Compare;