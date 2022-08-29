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
                &ldquo;INSIGHTS&rdquo; is a journalistic community club. Our goal is to create and distribute reports about the interactions of events, facts, and ideas that are &ldquo;the news of the day&rdquo;. The speciality of the Insights club will be to provide a bi&#45;weekly&nbsp;newsletter that sums up all the ongoing, upcoming, and completed events, seminars, fests, etc.
                </p>
            </div>
            <div className="objective-2">
                <h2 className="objective-2-heading">Our&nbsp;objective</h2>
                <p className="objective-2-text">
                Insights Club&apos;s objective is to provide a uniform flow of information directly and through the students of our university regarding all the events and current affairs of the university through online mode (web/socials) and on&#45;field journalism. We intend to hold certain intra&#45;campus events where students from any branch and campus are welcome to participate. The club will also focus on improving abilities that will stimulate the creation of innovative media messages.
                </p>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Intro;
