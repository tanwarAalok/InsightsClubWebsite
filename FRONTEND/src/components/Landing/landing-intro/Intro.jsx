import React, { Fragment } from "react";
import Graphics from '../../../media/undraw_newspaper.png';
import "@fontsource/mulish";
import "@fontsource/palanquin-dark";
import "@fontsource/inter";
import "@fontsource/martel";
import './intro.css'
import { Outlet } from "react-router-dom";

function Intro() {
    return (
        <Fragment>
            <div className="intro-block">
                <div className="intro-text">
                    <h1 className="intro-heading">
                        &ldquo;Surrounded by&nbsp;data,
                        <br />
                        Starved for insights!!&rdquo;
                    </h1>
                    <p className="intro-para">Dive in the vast ocean of data,
                        <br />
                        to gain the pearl of insights.</p>
                    <button className="intro-button">Get daily updates</button>
                </div>
                <div className="intro-graphics">
                    <img src={Graphics} alt="" />
                </div>
            </div>

            <div className="objective">
                <h2 className="objective-heading">What&nbsp;is Insights&nbsp;Club?</h2>
                <p className="objective-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat.
                    <br />
                    Duis aute irure dolor in reprehenderit
                    <br />
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    <br />
                    ui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className="objective-2">
                <h2 className="objective-2-heading">Our&nbsp;objective</h2>
                <p className="objective-2-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat.
                    <br />
                    Duis aute irure dolor in reprehenderit
                    <br />
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                    <br />
                    ui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Intro;
