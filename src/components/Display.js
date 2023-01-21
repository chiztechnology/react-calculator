/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPanel.css';
import './Calculator.css';

class Display extends React.Component {

    static propTypes = {
        value: PropTypes.string,
      };

    render() {
        return (
            <div className='display-screen'>
                <h3 className='screen-text'>{this.props.value}</h3>
            </div>
        );
    }
}

export default Display;
