import React from 'react';

import useStyles from './profileStyles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from '../useToken';
import  Login  from '../Login/Login';
import {Container, Typography} from "@material-ui/core";

const Profile = () => {
    const { token, setToken } = useToken();
    const classes = useStyles();

    if(!token) {
        return <Login setToken={setToken} />
    }

    return(
        <Container>
            <div className={classes.wrapper}>
                <Typography variant='h2'>Profile Goes Here</Typography>
            </div>
        </Container>


    )
}


export default Profile