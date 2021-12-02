import React, { useState } from 'react';

import useStyles from './loginStyles';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import {Typography} from "@material-ui/core";

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default function Login() {
    const classes = useStyles();
    return(
        <div className={classes.loginStyleWrapper}>
            <h1>Please Log In</h1>
            <form>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}