import './styles/filters.css'

import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';

const Filters = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDate2, setSelectedDate2] = useState('');

    const handleDateChange = (e) => {
      setSelectedDate(e.target.value);
    };
    
    const handleDateChange2 = (e) => {
      setSelectedDate2(e.target.value);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

    
    const [adultsCount, setAdultsCount] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);

    const decreaseCount = (type) => {
        if (type === 'adults' && adultsCount > 1) setAdultsCount(adultsCount - 1);
        else if (type === 'children' && childrenCount > 0) setChildrenCount(childrenCount - 1);
    };

    const increaseCount = (type) => {
        if (type === 'adults') setAdultsCount(adultsCount + 1);
        else if (type === 'children') setChildrenCount(childrenCount + 1);
    };

    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e) => setSelectedOption(e.target.value);

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
                <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    className="filters-input"
                />
            </div>

            <div className="filters-box">
                <h2>Повернення</h2>
                <input
                    type="date"
                    value={selectedDate2}
                    onChange={handleDateChange2}
                    className="filters-input"
                />
            </div>

            <div className="filters-box">
                <h2>Мандрівники</h2>
                <div className='travelers'>
                    <p>Дорослі:</p>
                    <button onClick={() => decreaseCount('adults')}>-</button>
                    {adultsCount}
                    <button onClick={() => increaseCount('adults')}>+</button>
                    
                    <p>Діти:</p>
                    <button onClick={() => decreaseCount('children')}>-</button>
                    {childrenCount}
                    <button onClick={() => increaseCount('children')}>+</button>
                </div>
            </div>

            <div className="filters-box filters-box6">
                <h2>Клас салону</h2>
                <select id="options" value={selectedOption} onChange={handleSelectChange} className="filters-input">
                    <option value="option1">Перший</option>
                    <option value="option2">Бізнес</option>
                    <option value="option3">Економ</option>
                </select>
            </div>

            <Link to='/compare' className="compare-button"><h2>Порівняти<br />рейси</h2></Link>
        </div>
     );
}
 
export default Filters;