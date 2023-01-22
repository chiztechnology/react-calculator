import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = props => {
  const handleClick = () => props.clickHandler(props.name);

  const className = [
    'component-button',
    props.orange ? 'orange' : '',
    props.wide ? 'wide' : '',
  ];

  return (
    <div className={className.join(' ').trim()}>
      <button onClick={handleClick}>{props.name}</button>
    </div>
  );
}

export default Button