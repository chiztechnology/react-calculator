import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => (
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
            <h1>Welcome to our page!</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem commodi dolor quae doloremque similique architecto soluta aspernatur odit sed fuga, qui quas dicta omnis vero eaque inventore? Libero eaque eius numquam amet hic quasi ex officia qui veniam. Ipsam laborum accusantium nobis rem eligendi facilis sint, sapiente aliquam modi cum a eaque praesentium nisi unde est similique corporis optio ratione neque officia illo repellendus quod commodi reiciendis? Quas eveniet voluptas incidunt corporis debitis nobis quam. Molestias alias veniam repudiandae quisquam!
            </p>
        </div>

    </div>
);

export default Home;