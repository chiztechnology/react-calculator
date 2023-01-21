import React from 'react';
import ButtonPanel from './ButtonPanel';
import './ButtonPanel.css';
import './Calculator.css';

class Calculator extends React.Component {
  render() {
    return (
      <div className='component-app'>
        {/* display zone */}
        <div className='display-screen'>
          <h3 className = 'screen-text'>000</h3>
        </div>
        {/* buttons and signs */}
        <ButtonPanel />
      </div>
    );
  }
}

export default Calculator;
