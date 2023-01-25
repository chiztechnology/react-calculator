import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'
const Quote = () => (
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
        <div className='body-container'>
            <p>
                Mathmatics is not about numbers, equations, computations, or algorithms: it&apos;s about understanding. - William Paul Thurson
            </p>
        </div>

    </div>
);

export default Quote;