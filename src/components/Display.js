import React from 'react';
import PropTypes from 'prop-types';
import './ButtonPanel.css';
import './Calculator.css';

export default class Display extends React.PureComponent {

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