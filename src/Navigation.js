import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

const Navigation = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />}>
            </Route>
            <Route path='/Home' element={<Home />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path='/quote' element={<Quote />} />
        </Routes>
    </BrowserRouter>
);

export default Navigation;