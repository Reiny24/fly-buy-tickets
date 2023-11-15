import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min';

import './styles/places.css';

const Places = () => {

    const flightData = useLocation().state.flightData;

    const [places, setPlace] = useState([
        [{ seat: 0, id: 0 }, { seat: 0, id: 1 },
         { seat: 1, id: 2 }, { seat: 1, id: 3 },
         { seat: 0, id: 4 }, { seat: 1, id: 5 },
         { seat: 0, id: 6 }, { seat: 1, id: 7 }],

        [{ seat: 1, id:  8 }, { seat: 1, id: 9 },
         { seat: 0, id: 10 }, { seat: 0, id: 11 },
         { seat: 0, id: 12 }, { seat: 1, id: 13 },
         { seat: 0, id: 14 }, { seat: 1, id: 15 }],

        [{ seat: 1, id: 16 }, { seat: 1, id: 17 }, { seat: 0, id: 18 },
         { seat: 0, id: 19 }, { seat: 0, id: 20 }, { seat: 0, id: 21 },
         { seat: 0, id: 22 }, { seat: 1, id: 23 }, { seat: 0, id: 24 },
         { seat: 0, id: 25 }, { seat: 1, id: 26 }, { seat: 0, id: 27 }],
        
        [{ seat: 1, id: 28 }, { seat: 1, id: 29 }, { seat: 0, id: 30 },
         { seat: 0, id: 31 }, { seat: 0, id: 32 }, { seat: 0, id: 33 },
         { seat: 0, id: 34 }, { seat: 1, id: 35 }, { seat: 0, id: 36 },
         { seat: 0, id: 37 }, { seat: 1, id: 36 }, { seat: 0, id: 39 }],

        [{ seat: 1, id: 40 }, { seat: 1, id: 41 }, { seat: 0, id: 42 },
         { seat: 0, id: 43 }, { seat: 0, id: 44 }, { seat: 0, id: 45 },
         { seat: 0, id: 46 }, { seat: 1, id: 47 }, { seat: 0, id: 48 },
         { seat: 0, id: 49 }, { seat: 1, id: 50 }, { seat: 0, id: 51 },
         { seat: 0, id: 52 }, { seat: 1, id: 53 }, { seat: 0, id: 54 },
         { seat: 0, id: 55 }, { seat: 1, id: 56 }, { seat: 0, id: 57 }],

        [{ seat: 1, id: 58 }, { seat: 1, id: 59 }, { seat: 0, id: 60 }, 
         { seat: 0, id: 61 }, { seat: 0, id: 62 }, { seat: 0, id: 63 },
         { seat: 0, id: 64 }, { seat: 1, id: 65 }, { seat: 0, id: 66 },
         { seat: 0, id: 67 }, { seat: 1, id: 68 }, { seat: 0, id: 69 },
         { seat: 0, id: 70 }, { seat: 1, id: 71 }, { seat: 0, id: 72 },
         { seat: 0, id: 73 }, { seat: 1, id: 74 }, { seat: 0, id: 75 }],

        [{ seat: 1, id: 76 }, { seat: 1, id: 77 }, { seat: 0, id: 78 },
         { seat: 0, id: 79 }, { seat: 0, id: 80 }, { seat: 0, id: 81 },
         { seat: 0, id: 82 }, { seat: 1, id: 83 }, { seat: 0, id: 84 },
         { seat: 0, id: 85 }, { seat: 1, id: 86 }, { seat: 0, id: 87 },
         { seat: 0, id: 88 }, { seat: 1, id: 89 }, { seat: 0, id: 90 },
         { seat: 0, id: 91 }, { seat: 1, id: 92 }, { seat: 0, id: 93 }]
      ]);

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

      const [placePrice, setPlacePrice] = useState(0); // Початкова ціна місць

      const handlePlaceChange = (element, seatPrice) => {
          const selectedElement = document.getElementById(element);
          selectedElement.classList.toggle('selected-place');

          if (selectedElement.classList.contains('selected-place')) setPlacePrice(placePrice + seatPrice)   // Збільшення ціни
          else setPlacePrice(placePrice - seatPrice);   // Збільшення ціни
      }

      const [price, setPrice] = useState(0); // Початкова ціна багажу
      const [previous, setPrevious] = useState('7kg');

      const handleBaggageChange = (selectedPrice, element) => {
          setPrice(selectedPrice);
          setPrevious(element);
        
          if (previous) document.getElementById(previous).classList.remove('selected-baggage');
          document.getElementById(element).classList.add('selected-baggage');
      };
      
    return ( 
        <div className="places">
            <h1 className='places-title'>Вибір місця (місць)</h1>
            <div className="places-flight">
                <h2>{flightData.title}<br/>{flightData.time}</h2>
            </div>
            <div className="places-box">
                <div className="schema">
                    <img src="/fly-buy-tickets/images/schema/exit.png" alt="Вхід/вихід" />
                    <p>A</p><p>B</p><p>C</p><p></p><p>D</p><p>E</p><p>F</p>
                    <img src="/fly-buy-tickets/images/schema/exit.png" alt="Вхід/вихід" className='rotate-image' />

                    {/* Перший клас */}

                    <div className='windows2'>
                        <div></div>
                        <div className='left-window'></div>
                        <div></div>
                        <div className='left-window'></div>
                    </div>

                    <div className='first'>
                        {places[0].map((place) => (
                            <div key={place.id}>
                                {place.seat === 0 && <img src='/fly-buy-tickets/images/schema/blocked-seat.png' alt='Зайняте місце'></img>}
                                {place.seat === 1 && <div className='first-place' id={place.id} onClick={() => handlePlaceChange(place.id, flightData.first)}></div>}
                            </div>
                        ))}
                    </div>

                    <div className='gap'></div>
                    <div className='gap'>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                    </div>
                    <div className='gap'></div>

                    <div className='first'>
                        {places[1].map((place) => (
                            <div key={place.id}>
                                {place.seat === 0 && <img src='/fly-buy-tickets/images/schema/blocked-seat.png' alt='Зайняте місце'></img>}
                                {place.seat === 1 && <div className='first-place' id={place.id} onClick={() => handlePlaceChange(place.id, flightData.first)}></div>}
                            </div>
                        ))}
                    </div>

                    <div className='windows2'>
                        <div></div>
                        <div className='right-window'></div>
                        <div></div>
                        <div className='right-window'></div>
                    </div>

                    {/* Вихід */}

                    <img src="/fly-buy-tickets/images/schema/exit.png" alt="Вхід/вихід" />
                    <hr />
                    <img src="/fly-buy-tickets/images/schema/exit.png" alt="Вхід/вихід" className='rotate-image' />
                    
                    {/* Бізнес клас */}

                    <div className='windows5'>
                        <div></div>
                        <div className='left-window'></div>
                        <div></div>
                        <div className='left-window'></div>
                        <div></div>
                        <div className='left-window'></div>
                        <div></div>
                        <div className='left-window'></div>
                        <div></div>
                        <div className='left-window'></div>
                    </div>

                    <div className='business'>
                        {places[2].map((place) => (
                            <div key={place.id}>
                                {place.seat === 0 && <img src='/fly-buy-tickets/images/schema/blocked-seat.png' alt='Зайняте місце'></img>}
                                {place.seat === 1 && <div className='business-place' id={place.id} onClick={() => handlePlaceChange(place.id, flightData.business)}></div>}
                            </div>
                        ))}
                    </div>

                    <div className='gap2'>
                        <p>5</p>
                        <p>6</p>
                        <p>7</p>
                        <p>8</p>
                        <p>9</p>
                        <p>10</p>
                        <p>11</p>
                        <p>12</p>
                        <p>13</p>
                        <p>14</p>
                    </div>

                    <div className='business'>
                        {places[3].map((place) => (
                            <div key={place.id}>
                                {place.seat === 0 && <img src='/fly-buy-tickets/images/schema/blocked-seat.png' alt='Зайняте місце'></img>}
                                {place.seat === 1 && <div className='business-place' id={place.id} onClick={() => handlePlaceChange(place.id, flightData.business)}></div>}
                            </div>
                        ))}
                    </div>

                    <div className='windows5'>
                        <div></div>
                        <div className='right-window'></div>
                        <div></div>
                        <div className='right-window'></div>
                        <div></div>
                        <div className='right-window'></div>
                        <div></div>
                        <div className='right-window'></div>
                        <div></div>
                        <div className='right-window'></div>
                    </div>

                    {/* Економ місця */}

                    <div className='econom'>
                        {places[4].map((place) => (
                            <div key={place.id}>
                                {place.seat === 0 && <img src='/fly-buy-tickets/images/schema/blocked-seat.png' alt='Зайняте місце'></img>}
                                {place.seat === 1 && <div className='econom-place' id={place.id} onClick={() => handlePlaceChange(place.id, flightData.econom)}></div>}
                            </div>
                        ))}
                    </div>

                    <div className='econom'>
                        {places[5].map((place) => (
                            <div key={place.id}>
                                {place.seat === 0 && <img src='/fly-buy-tickets/images/schema/blocked-seat.png' alt='Зайняте місце'></img>}
                                {place.seat === 1 && <div className='econom-place' id={place.id} onClick={() => handlePlaceChange(place.id, flightData.econom)}></div>}
                            </div>
                        ))}
                    </div>

                    <img src="/fly-buy-tickets/images/schema/exit.png" alt="Вхід/вихід" />
                    <p>A</p><p>B</p><p>C</p><p><strong>WC</strong></p><p>D</p><p>E</p><p>F</p>
                    <img src="/fly-buy-tickets/images/schema/exit.png" alt="Вхід/вихід" className='rotate-image' />
                </div>
                
                <div className="place-info">
                    <h2>Інформація про місця</h2>
                    <div className="seats-info-box">
                        <div className="seat-info">
                            <div className='first-place'></div>
                            <h3>Перший клас</h3>
                            <h3>Ціна</h3>
                            <ul>
                                <li>розкішний комфорт</li>
                                <li>вишукане обслуговування</li>
                                <li>приватний простір</li>
                                <li>ексклюзивні послуги</li>
                            </ul>
                            
                            <div>
                                <p className='price'><strong>{flightData.first} грн</strong> (UAH)</p>
                                <p>на 1 людину</p>
                            </div>
                        </div>

                        <hr />

                        <div className="seat-info">
                            <div className='business-place'></div>
                            <h3>Бізнес клас</h3>
                            <h3>Ціна</h3>
                            <ul>
                                <li>розширений комфорт</li>
                                <li>високий рівень послуг</li>
                                <li>приватний простір</li>
                            </ul>
                            
                            <div>
                                <p className='price'><strong>{flightData.business} грн</strong></p>
                                <p>на 1 людину</p>
                            </div>
                        </div>

                        <hr />

                        <div className="seat-info">
                            <div className='econom-place'></div>
                            <h3>Економ клас</h3>
                            <h3>Ціна</h3>
                            <ul>
                                <li>базовий комфорт</li>
                                <li>обмежений вибір їжі</li>
                                <li>стандартні сидіння</li>
                            </ul>
                            
                            <div>
                                <p className='price'><strong>{flightData.econom} грн</strong> (UAH)</p>
                                <p>на 1 людину</p>
                            </div>
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
                            
                            <img
                                src="/fly-buy-tickets/images/schema/7kg.png"
                                alt="7 кг багажу"
                                id="7kg"
                                onClick={() => handleBaggageChange(0, '7kg')}
                                className='selected-baggage'
                            />
                            
                            <img
                                src="/fly-buy-tickets/images/schema/20kg.png"
                                alt="20 кг багажу"
                                id="20kg"
                                onClick={() => handleBaggageChange(150, '20kg')}
                            />
                            
                            <img
                                src="/fly-buy-tickets/images/schema/32kg.png"
                                alt="32 кг багажу"
                                id="32kg"
                                onClick={() => handleBaggageChange(250, '32kg')}
                            />

                            <p>до 7 кг</p>
                            <p>до 20 кг</p>
                            <p>до 32 кг</p>

                            <p className='baggage-price'>{price} грн (UAH)</p>
                        </div>
                </div>

                <div className="cart-box">
                    <img src="/fly-buy-tickets/images/schema/cart.png" alt="Кошик" />
                    <p>Кошик: <br />0 грн</p>
                    <p>Ціна: {placePrice + price} грн (UAH)</p>
                    <Link to='/pay' className="add-to-cart"><h2>Додати в<br />кошик</h2></Link>
                </div>
            </div>
        </div>
     );
}
 
export default Places;