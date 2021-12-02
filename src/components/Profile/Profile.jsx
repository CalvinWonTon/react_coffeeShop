import React from "react";

import useStyles from './profileStyles';
import useToken from "../useToken";
import { Login } from '../Login';
import {Typography} from "@material-ui/core";



export default function Profile() {
    const { token, setToken } = useToken();
    const classes = useStyles();

    if(!token) {
        return <Login setToken={setToken} />
    }
    return(
        <Typography variant='h2'>Dashboard</Typography>
    );
}