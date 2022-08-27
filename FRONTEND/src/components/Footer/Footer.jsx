import React, { Fragment } from "react";
import Logo from "../../media/logo.png";
import DiscordLogo from "../../media/social-vectors/social-discord.svg";
import FacebookLogo from "../../media/social-vectors/social-facebook.svg";
import InstaLogo from "../../media/social-vectors/social-insta.svg";
import LinkedinLogo from "../../media/social-vectors/social-linkedin.svg";
import TwitterLogo from "../../media/social-vectors/social-twitter.svg";
import YtLogo from "../../media/social-vectors/social-yt.svg";
import MailLogo from "../../media/social-vectors/email.svg";
import "./footer.css";
import "@fontsource/mulish";
import "@fontsource/martel";
import { Outlet } from "react-router-dom";

function Footer() {
    return (
        <Fragment>
            <div className="footer">
                <div className="footer-brand">
                    <a className="footer-logo" href="/">
                        <img src={Logo} alt="Insights club" />
                    </a>
                </div>
                <div className="footer-links">
                    <h4 className="footer-heading">Quick Links</h4>
                    <a href="/" className="footer-link">Home</a>
                    <a href="/about" className="footer-link">About</a>
                    <a href="/news" className="footer-link">News</a>
                    <a href="/events" className="footer-link">Events</a>
                    <a href="/blogs" className="footer-link">Blogs</a>
                    <a href="/videos" className="footer-link">Videos</a>
                </div>
                <div className="footer-others">
                    <div className="contacts">
                        <h4 className="footer-heading">Contact us</h4>
                        <a href="mailto:insightsclub@vitbhopal.ac.in" className="contact">
                            <img src={MailLogo} alt="email" className="contact-logo" />
                            insightsclub@vitbhopal.ac.in
                        </a>
                    </div>
                    <div className="socials">
                        <h4 className="footer-heading">Follow us on</h4>
                        <span className="social-links">
                            <a href="https://discord.gg/2GTKpvKBu7"
                            target="_blank" rel="noreferrer" className="social-link">
                                <img src={DiscordLogo} alt="discord" className="social-logo" />
                            </a>
                            <a href="https://www.linkedin.com/company/insights-clubvitb/"
                            target="_blank" rel="noreferrer" className="social-link">
                                <img src={LinkedinLogo} alt="linkedin" className="social-logo" />
                            </a>
                            <a href="https://twitter.com/Insight_VIT"
                            target="_blank" rel="noreferrer" className="social-link">
                                <img src={TwitterLogo} alt="twitter" className="social-logo" />
                            </a>
                            <a href="https://www.facebook.com/insightsclubvitb/"
                            target="_blank" rel="noreferrer" className="social-link">
                                <img src={FacebookLogo} alt="facebook" className="social-logo" />
                            </a>
                            <a href="https://www.youtube.com/channel/UC9JuWZdup3Lkh05KObjtptw" 
                            target="_blank" rel="noreferrer" className="social-link">
                                <img src={YtLogo} alt="youtube" className="social-logo" />
                            </a>
                            <a href="https://www.instagram.com/insights_club/"
                            target="_blank" rel="noreferrer" className="social-link">
                                <img src={InstaLogo} alt="instagram" className="social-logo" />
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Footer;
