import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types'
import Fun from './Fun'
import Home from './Home'
import History from './History'
import { setHeader } from '../api/helpers';

const Routes = () => {
    setHeader()
}
