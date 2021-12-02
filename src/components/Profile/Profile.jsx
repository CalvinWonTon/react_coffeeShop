import React from 'react';

import useStyles from './profileStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from '../useToken';
import  Login  from '../Login/Login';
import {Typography} from "@material-ui/core";



export default function Profile() {
    const { token, setToken } = useToken();
    const classes = useStyles();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return(
        <div className="wrapper">
            <Typography variant='h2'>Profile Goes Here</Typography>
        </div>

    )
}