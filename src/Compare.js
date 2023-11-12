import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './styles/compare.css'

const Compare = () => {
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

    const dataToSend = 123;

    return ( 
        <div className="compare">
            <p className='compare-title'>Порівняння рейсів</p>

            {flights.map((flight) => (
                <div className='compare-flight' key={flight.id}>
                    <div className="flight-info">
                        <h2>Рейс:</h2>
                        <h2> {flight.title}</h2>
                        
                        <h2>Час:</h2>
                        <h2>{flight.time}</h2>
                        
                        <h2>Місце:</h2>
                        <h2>{flight.place}</h2>
                        
                        <h2>Ціна:</h2>
                        <h1>{flight.price} грн</h1>
                    </div>

                    <Link to={{ pathname: '/places', state: {flightData: flight} }} className="buy-ticket"><h2>Купити</h2></Link>
                </div>
            ))}
        </div>
     );
}
 
export default Compare;