import React, {Component} from 'react';
import PropTypes from 'prop-types';

const InLineError = ({text}) => <span style={{color:'red'}}>{text}</span>

InLineError.prototype={
    text: PropTypes.string.isRequired
};

export default InLineError;