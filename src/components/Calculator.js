import React from 'react';
import ButtonPanel from './ButtonPanel';
import './ButtonPanel.css';
import './Calculator.css'


class Calculator extends React.Component {
    render(){
        return (
            <div className='component-app'>
                {/* display zone */}
                <div style={{width : 300}}>
                    <h3 style={{paddingLeft:15}}>000</h3>
                </div>
                {/* buttons and signs */}
                <ButtonPanel />
            </div>
        )
    }
}

export default Calculator;