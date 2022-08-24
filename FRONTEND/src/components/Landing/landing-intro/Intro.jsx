import React, { Fragment, useState, useEffect } from "react";
import Graphics from '../../../media/undraw_newspaper.png';
import AuthModal from "../../AuthCards/Auth";
import { useCookies } from 'react-cookie'
import "@fontsource/mulish";
import "@fontsource/palanquin-dark";
import "@fontsource/inter";
import "@fontsource/martel";
import './intro.css'
import { Outlet } from "react-router-dom";

function Intro() {
    const [showAuthModal, displayAuthModal] = useState(false)
    const [AuthModalPage, setPage] = useState('SignIn')
    const [cookies] = useCookies(["user"]);

    useEffect(() => {
        if(showAuthModal === true)
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        else
            document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    });
    

    return (
        <Fragment>
            {showAuthModal && <AuthModal displayModal={displayAuthModal} authPage={AuthModalPage} />}
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
                    <div className="intro-button-group">
                        <button className="intro-button intro-primary-button"
                            onClick={async () => {
                                if (!(cookies.hasOwnProperty('user') && Object.keys(cookies.user).length !== 0)) {
                                    setPage('SignIn')
                                    displayAuthModal(true)
                                } else {
                                    //@TODO: HANDLE BUTTON CLICK WHEN USER HAS LOGGED IN
                                    // REDIRECT TO PROFILE
                                }
                            }}>
                            {
                                !(cookies.hasOwnProperty('user') && Object.keys(cookies.user).length !== 0) ?
                                    'Log in' : "Profile"
                            }
                        </button>
                        {!(cookies.hasOwnProperty('user') && Object.keys(cookies.user).length !== 0) &&
                            <button className="intro-button intro-secondary-button"
                                onClick={
                                    async () => {
                                        setPage('SignUp')
                                        displayAuthModal(true)
                                    }}>
                                Sign Up
                            </button>
                        }
                    </div>
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
