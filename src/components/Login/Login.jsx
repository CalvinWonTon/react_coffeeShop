import React, { useState } from 'react';

import useStyles from './loginStyles';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default function Login( { setToken } ) {
    const classes = useStyles();

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            username,
            password
        });
        setToken(token);
    }


    return(
        <div className={classes.loginStyleWrapper}>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <Typography variant='subtitle1'>Username</Typography>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    <Typography variant='subtitle1'>Password</Typography>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}