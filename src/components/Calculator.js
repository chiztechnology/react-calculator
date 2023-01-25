import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './Home.css'
import { Link } from 'react-router-dom';

const Calculator = () => {
    const [data, setData] = useState({
        total: 0,
        operation: null,
        next: null
    });

    const handleClick = buttonName => {
        setData((state) => calculate(state, buttonName))
    }

    return (
        <div className='container'>
            {/* menu bar */}
            <div className='main-header'>
                <h2 className='logo'>Math Magicians</h2>
                {/* menus */}
                <ul className='header-ul'>
                    <li className='header-li'><Link className='header-li-item' to='/'>Home</Link></li>
                    <li className='header-li'><Link className='header-li-item' to='/calculator'>Calculator</Link></li>
                    <li className='header-li'><Link className='header-li-item' to='/quote'>Quote</Link></li>
                </ul>
            </div>
            {/* body */}
            <div className='body-container-calculator'>
                <p className='calc-text-body'>
                    Let&aopos;sdo some math!
                </p>
                <div className='component-app'>
                    <Display value={data.next || data.total || '0'} />
                    <ButtonPanel clickHandler={handleClick} />
                </div>
            </div>

        </div>
    );
}

export default Calculator