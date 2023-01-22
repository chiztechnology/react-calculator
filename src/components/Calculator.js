import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const Calculator = () => {
    const [data, setData] = useState({
        total: 0,
        operation: null,
        next: null
    });
    
    const handleClick = buttonName => {
        setData((state)=> calculate(state, buttonName))
    }

    return (
        <div className='component-app'>
            <Display value={data.next || data.total  || '0'} />
            <ButtonPanel clickHandler={handleClick} />
        </div>
    );
}

export default Calculator