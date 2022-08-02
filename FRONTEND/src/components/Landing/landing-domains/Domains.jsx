import React, { Fragment } from "react";
// import { useDispatch, useSelector } from "react-redux";
import "@fontsource/mulish";
import "@fontsource/martel";
import "@fontsource/inter";
import './domains.css';
import event_mic from '../../../media/event_mic.png';
import { Outlet } from "react-router-dom";

function Domains() {
    return (
        <Fragment>
            <Outlet />
        </Fragment>
    );
}

export default Domains;
