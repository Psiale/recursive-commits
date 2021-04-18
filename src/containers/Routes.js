import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';
import env from 'react-dotenv'
import PropTypes from 'prop-types'
import Fun from './Fun'
import Home from './Home'
import History from './History'
import { setHeader } from '../api/helpers';
import axios from 'axios';
const Routes = () => {
    setHeader(env.API_KEY)
    //Testing correct password assignation, this and the axios library
    // will be deleted
    console.log(axios.defaults)
}
