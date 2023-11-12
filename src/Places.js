import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import './styles/places.css';

const Places = () => {

    const flightData = useLocation().state.flightData;

    const [places, setPlace] = useState([
        { seat: 1, id:  1 }, { seat: 1, id:  2 }, { seat: 0, id:  3 }, { seat: 2, id:  4 }, { seat: 2, id:  5 }, { seat: 2, id:  6 }, { seat: 2, id:  7 },
        { seat: 1, id:  8 }, { seat: 0, id:  9 }, { seat: 0, id: 10 }, { seat: 2, id: 11 }, { seat: 1, id: 12 }, { seat: 1, id: 13 }, { seat: 0, id: 14 },
        { seat: 0, id: 15 }, { seat: 1, id: 16 }, { seat: 1, id: 17 }, { seat: 2, id: 18 }, { seat: 1, id: 19 }, { seat: 0, id: 20 }, { seat: 1, id: 21 },
        { seat: 1, id: 22 }, { seat: 1, id: 23 }, { seat: 1, id: 24 }, { seat: 2, id: 25 }, { seat: 1, id: 26 }, { seat: 0, id: 27 }, { seat: 1, id: 28 },
        { seat: 1, id: 29 }, { seat: 0, id: 30 }, { seat: 1, id: 31 }, { seat: 2, id: 32 }, { seat: 0, id: 33 }, { seat: 1, id: 34 }, { seat: 1, id: 35 },
        { seat: 1, id: 36 }, { seat: 0, id: 37 }, { seat: 1, id: 38 }, { seat: 2, id: 39 }, { seat: 1, id: 40 }, { seat: 1, id: 41 }, { seat: 0, id: 42 },
        { seat: 0, id: 43 }, { seat: 1, id: 44 }, { seat: 1, id: 45 }, { seat: 2, id: 46 }, { seat: 1, id: 47 }, { seat: 0, id: 48 }, { seat: 1, id: 49 },
        { seat: 1, id: 50 }, { seat: 0, id: 51 }, { seat: 1, id: 52 }, { seat: 2, id: 53 }, { seat: 0, id: 54 }, { seat: 1, id: 55 }, { seat: 1, id: 56 },
        { seat: 1, id: 57 }, { seat: 0, id: 58 }, { seat: 0, id: 59 }, { seat: 2, id: 60 }, { seat: 1, id: 61 }, { seat: 1, id: 62 }, { seat: 0, id: 63 },
        { seat: 1, id: 64 }, { seat: 1, id: 65 }, { seat: 0, id: 66 }, { seat: 2, id: 67 }, { seat: 0, id: 68 }, { seat: 1, id: 69 }, { seat: 1, id: 70 },
        { seat: 1, id: 71 }, { seat: 0, id: 72 }, { seat: 1, id: 73 }, { seat: 2, id: 74 }, { seat: 0, id: 75 }, { seat: 1, id: 76 }, { seat: 1, id: 77 },
        { seat: 0, id: 78 }, { seat: 1, id: 79 }, { seat: 0, id: 80 }, { seat: 2, id: 81 }, { seat: 1, id: 82 }, { seat: 1, id: 83 }, { seat: 0, id: 84 },
      ]);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
      
    return ( 
        <div className="places">
            <h1 className='places-title'>Вибір місця (місць)</h1>
            <div className="places-flight">
                <h2>{flightData.title}<br/>{flightData.time}</h2>
            </div>
            <div className="places-box">
                <div className="schema">
                    <img src="/fly-buy-tickets/images/schema/exit.png" alt="Вхід/вихід" />
                    <p>A</p>
                    <p>B</p>
                    <p>C</p>
                    <p></p>
                    <p>D</p>
                    <p>E</p>
                    <p>F</p>
                    <img src="/fly-buy-tickets/images/schema/exit.png" alt="Вхід/вихід" className='rotate-image' />

                    <div className='schema-places'>
                        {places.map((place) => (
                            <div key={place.id}>
                                {place.seat === 0 && <img src='/fly-buy-tickets/images/schema/blocked-seat.png' alt='Вільне місце'></img>}
                                {place.seat === 1 && <div className="free-place"></div>}
                                {place.seat === 2 && <p></p>}
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="place-info">
                    <h2>Інформація про місця</h2>
                    <div className="seat-info">
                        <div className="free-seat-info">
                            <img src="/fly-buy-tickets/images/schema/free-seat.png" alt="" />
                            <h3>Доступно</h3>
                            <h4>Надається базовий рівень обслуговування.</h4>
                            <p className='price'>{flightData.price} грн (UAH)</p>
                            <p>на 1 людину</p>
                        </div>

                        <hr />

                        <div className="blocked-seat-info">
                            <img src="/fly-buy-tickets/images/schema/blocked-seat.png" alt="" />
                            <h3>Зарезервоване місце</h3>
                            <h4>Місце може бути вже зайняте або недоступне для покупки</h4>
                        </div>

                        <hr />

                        <div className="selected-seat-info">
                            <img src="/fly-buy-tickets/images/schema/selected-seat.png" alt="" />
                            <h3>Вибране місце</h3>
                        </div>
                    </div>

                    <div className="baggage-info">
                        <h2>Інформація про багаж</h2>
                        
                        <img src="/fly-buy-tickets/images/schema/7kg.png" alt="7 кг багажу" />
                        
                        <img src="/fly-buy-tickets/images/schema/20kg.png" alt="20 кг багажу" />
                        
                        <img src="/fly-buy-tickets/images/schema/32kg.png" alt="32 кг багажу" />
                        <p>7 кг</p>
                        <p>20 кг</p>
                        <p>32 кг</p>

                        <p className='baggage-price'>200 грн (UAH)</p>
                    </div>
                </div>

                <div className="cart-box">
                    <img src="/fly-buy-tickets/images/schema/cart.png" alt="Кошик" />
                    <p>Кошик: <br />0 грн</p>
                    <p>Ціна: 800 грн (UAH)</p>
                    <Link to='/pay' className="add-to-cart"><h2>Додати в<br />кошик</h2></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Places;