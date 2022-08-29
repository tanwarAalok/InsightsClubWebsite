import React, { Fragment } from "react";
import "@fontsource/mulish";
import "@fontsource/martel";
import './about.css';
import LinkedInLogo from "../../media/social-vectors/social-linkedin.svg"
import GithubLogo from "../../media/social-vectors/social-github.svg"
import InstagramLogo from "../../media/social-vectors/social-insta.svg"
import AmarKumar_pfp from "../../media/InsightsLeads/AmarKumar.jpeg"
import Anubhav_pfp from "../../media/InsightsLeads/Anubhav.jpeg"
import SanjeevKumar_pfp from "../../media/InsightsLeads/SanjeevKumar.jpg"
import AtulAman_pfp from "../../media/InsightsLeads/AtulAman.jpeg"
import SandeepSahu_pfp from "../../media/InsightsLeads/SandeepSahu.jpeg"
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function About() {
    const insightsHeads = [
        {
            name: 'Anubhav Raj',
            post: 'President',
            pfp: Anubhav_pfp,
            github: 'https://github.com/Anubhav980',
            linkedin: 'https://www.linkedin.com/in/anubhav-raj-5175851b4/',
            insta: 'https://instagram.com/anubhav_322?igshid=YmMyMTA2M2Y='
        },
        {
            name: 'Amar Kumar',
            post: 'Vice-President',
            pfp: AmarKumar_pfp,
            github: 'https://github.com/Amar985',
            linkedin: 'https://www.linkedin.com/in/amar-kumar-793536201',
            insta: 'https://instagram.com/amrkchv?igshid=YmMyMTA2M2Y='
        },
        {
            name: 'Sanjeev Kumar',
            post: 'Administrative advisor',
            pfp: SanjeevKumar_pfp,
            github: 'https://github.com/San123123123',
            linkedin: 'https://www.linkedin.com/in/sanjeev-kumar-ba7404227',
            insta: ''
        },
    ]
    return (
        <Fragment>
            <div className="about-content">
                <h1 className="about-heading">What is Insights&nbsp;Club?</h1>
                <p className="about-text">
                    &ldquo;INSIGHTS&rdquo; is a journalistic community club. Our goal is to create and distribute reports about the interactions of events, facts, and ideas that are &ldquo;the news of the day&rdquo;. The speciality of the Insights club will be to provide a bi&#45;weekly&nbsp;newsletter that sums up all the ongoing, upcoming, and completed events, seminars, fests, etc.
                    <br />
                    <br />
                    Insights Club&apos;s objective is to provide a uniform flow of information directly and through the students of our university regarding all the events and current affairs of the university through online mode (web/socials) and on&#45;field journalism. We intend to hold certain intra&#45;campus events where students from any branch and campus are welcome to participate. The club will also focus on improving abilities that will stimulate the creation of innovative media messages.
                    <br />
                    <br />
                </p>
                <h1 className="about-heading">About us</h1>
                <p className="about-text">
                    Club President Anubhav Raj along with the club administrative advisor Sanjeev Kumar and Shrey Srivastava came up with this vision of creating the club. The conversations brewed up by Amar Kumar, vice-president of the club with Suryakant Patwardhan and Akhil Rajeev Pillai turned this idea into a proposal. With the help of motivated and enthusiastic club board members the boat sailed perfectly and on 5th August the club was inaugurated.
                    <br />
                    Lastly the club coordinators Sandeep Sahu sir and Atul Aman sir stood by us through thick and thin when this club was in its initial stage and helped in making a strong foundation.
                    <br />
                    <br />
                    <q>
                        VIT-BHOPAL University was established in 2017 and continues to diversify each year to improve the country's higher technological education, research, and industrial consultancy.
                        <br />
                        The goal of a newsletter is to evaluate our constant endeavours at every step which eventually helps us to know our progress and accomplishments in a better way.
                    </q> &#45;&nbsp;Mr.&nbsp;Sandeep&nbsp;Sahu
                    <br />
                    <br />
                    <q>
                        I congratulate every individual from the Insights club to bring such a platform that will portray a better picture of the potential, endeavours, and excellence of VIT Bhopal University in every domain.
                        <br />
                        This attempt will surely develop a better understanding of the university among people around the globe through different mass-media platforms.
                    </q> &#45;&nbsp;Dr.&nbsp;Atul&nbsp;Aman
                </p>
            </div>
            <div className="faculty-card-group">
                <h2 className="faculty-card-heading">Faculty Coordinator</h2>
                <div className="faculty-cards">
                    <div className="faculty-card">
                        <img src={AtulAman_pfp} alt="faculty coordinator" className="insights-leads-pfp" />
                        <span className="insights-leads-name">Dr. Atul Aman</span>
                        <div className="about-social-links">
                            <a href="https://www.linkedin.com/in/atul-aman-53bb0328/"
                                target="_blank" rel="noreferrer" className="insights-leads-social-link">
                                <img src={LinkedInLogo} alt="Instagram" className="insights-leads-social-logo" />
                            </a>
                        </div>
                    </div>
                    <div className="faculty-card">
                        <img src={SandeepSahu_pfp} alt="faculty coordinator" className="insights-leads-pfp" />
                        <span className="insights-leads-name">Mr. Sandeep Sahu</span>
                        <div className="about-social-links">
                            <a href="https://www.linkedin.com/in/sandeep-sahu-8b392519/"
                                target="_blank" rel="noreferrer" className="insights-leads-social-link">
                                <img src={LinkedInLogo} alt="Instagram" className="insights-leads-social-logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="insights-leads-card-group">
                {
                    insightsHeads.map((head, index) => {
                        return (
                            <div key={index} className="insights-leads-card">
                                <h3 className="insights-leads-card-heading">{head.post}</h3>
                                <div
                                    style={{ backgroundImage: `url(${head.pfp})` }}
                                    className="insights-leads-pfp" />
                                <span className="insights-leads-name">{head.name}</span>
                                <div className="about-social-links">
                                    {head.linkedin &&
                                        <a href={head.linkedin}
                                            target="_blank" rel="noreferrer" className="insights-leads-social-link">
                                            <img src={LinkedInLogo} alt="LinkedIn" className="insights-leads-social-logo" />
                                        </a>
                                    }
                                    {head.github &&
                                        <a href={head.github}
                                            target="_blank" rel="noreferrer" className="insights-leads-social-link">
                                            <img src={GithubLogo} alt="GitHub" className="insights-leads-social-logo" />
                                        </a>
                                    }
                                    {head.insta &&
                                        <a href={head.insta}
                                            target="_blank" rel="noreferrer" className="insights-leads-social-link">
                                            <img src={InstagramLogo} alt="Instagram" className="insights-leads-social-logo" />
                                        </a>
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Footer />
            <Outlet />
        </Fragment>
    )
}

export default About
