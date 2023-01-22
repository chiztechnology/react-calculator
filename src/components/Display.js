import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPanel.css';
import './Calculator.css';

const Display = (props) => (
    <div className='display-screen'>
        <h3 className='screen-text'>{props.value}</h3>
    </div>
);

export default Display