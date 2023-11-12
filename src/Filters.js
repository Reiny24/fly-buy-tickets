import './styles/filters.css'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

const Filters = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 

    return ( 
        <div className="item filters">
            <h1 className="filters-title">Авіаквитки по всьому світу</h1>

            <div className="filters-direction">
                <label htmlFor="option1">
                    <img src="/fly-buy-tickets/images/filters/Arrow.png" alt="One direction" />
                    <h2>В один бік</h2>
                </label>
                <input type="radio" id="option1" name="options" value="option1" />
            </div>

            <div className="filters-direction">
                <label htmlFor="option2">
                    <img src="/fly-buy-tickets/images/filters/Arrows.png" alt="Two directions" />
                    <h2>У два боки</h2>
                </label>
                <input type="radio" id="option2" name="options" value="option2" />
            </div>

            <div className="filters-box filters-box1">
                <h2>Із</h2>
                <input type="text" className="filters-input" placeholder="Країна/місто/аеропорт" />
            </div>

            <div className="filters-box">
                <h2>Куди</h2>
                <input type="text" className="filters-input" placeholder="Країна/місто/аеропорт" />
            </div>

            <div className="filters-box">
                <h2>Відправлення</h2>
                <input type="text" className="filters-input" placeholder="Дата" />
            </div>

            <div className="filters-box">
                <h2>Повернення</h2>
                <input type="text" className="filters-input" placeholder="Дата" />
            </div>

            <div className="filters-box">
                <h2>Мандрівники</h2>
                <input type="text" className="filters-input" placeholder="Дорослі/діти" />
            </div>

            <div className="filters-box filters-box6">
                <h2>Клас салону</h2>
                <input type="text" className="filters-input" placeholder="Перший/бізнес/економ" />
            </div>

            <Link to='/compare' className="compare-button"><h2>Порівняти<br />рейси</h2></Link>
        </div>
     );
}
 
export default Filters;