import React, { Fragment } from "react";
import "@fontsource/mulish";
import "@fontsource/martel";
import "@fontsource/inter";
import './eventcard.css';
import event_mic from '../../../media/event_mic.png';
import { Outlet } from "react-router-dom";

function EventSlides() {
    const slideClickHandler = (arrow) => {
        const slides = document.querySelectorAll('.slides > .slide');
        const noOfSlides = slides.length;
        if (arrow === 'right') {
            for (let i = 0; i < noOfSlides; i++)
                if (slides[i].classList.contains('slide-active')) {
                    slides[i].classList.remove('slide-active');
                    slides[(i + 1) % noOfSlides].classList.add('slide-active');
                    break;
                }
        }
        if (arrow === 'left') {
            for (let i = 0; i < noOfSlides; i++)
                if (slides[i].classList.contains('slide-active')) {
                    slides[i].classList.remove('slide-active');
                    i > 0 ? slides[i - 1].classList.add('slide-active')
                        : slides[noOfSlides - 1].classList.add('slide-active');
                    break;
                }
        }
    }
    return (
        <Fragment>
            <div className="slider">
                <div className="slider-header">
                <h2 className="slider-heading">Our Events</h2>
                <span href="/events" className="slider-subheading">
                    <a href="" className="subheading-link">View all</a></span>
                </div>
                <div className="slide-box">
                    <button className="slide-button slide-left"
                        onClick={() => slideClickHandler('left')}>
                    </button>
                    <div className="slides">
                        <div className="slide">
                            <div className="slide-info">
                                <h3 className="slide-heading">Past Event</h3>
                                <p className="slide-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat.
                                    <br />
                                    Duis aute irure dolor in reprehenderit
                                    <br />
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    <br />
                                    ui officia deserunt mollit anim id est laborum.
                                </p>
                                <button className="slide-info-button">More info&hellip;</button>
                            </div>
                            <img className="slide-cover" src={event_mic} alt="" />
                        </div>
                        <div className="slide slide-active">
                            <div className="slide-info">
                                <h3 className="slide-heading">Ongoing Event</h3>
                                <p className="slide-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat.
                                    <br />
                                    Duis aute irure dolor in reprehenderit
                                    <br />
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    <br />
                                    ui officia deserunt mollit anim id est laborum.
                                </p>
                                <button className="slide-info-button">Register</button>
                            </div>
                            <img className="slide-cover" src={event_mic} alt="" />
                        </div>
                        <div className="slide">
                            <div className="slide-info">
                                <h3 className="slide-heading">Upcoming Event</h3>
                                <p className="slide-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat.
                                    <br />
                                    Duis aute irure dolor in reprehenderit
                                    <br />
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    <br />
                                    ui officia deserunt mollit anim id est laborum.
                                </p>
                                <button className="slide-info-button">Get updates</button>
                            </div>
                            <img className="slide-cover" src={event_mic} alt="" />
                        </div>
                    </div>
                    <button className="slide-button slide-right"
                        onClick={() => slideClickHandler('right')}>
                    </button>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default EventSlides;
