import React, { Fragment, useState, useEffect } from "react";
import "@fontsource/mulish";
import DomainModal from "./DomainModal/DomainModal";
import './domains.css';
import { Outlet } from "react-router-dom";

function TileRow({ row, displayModal, setPage }) {
    return (
        <div className="tile-row">{
            row.map((tile, index) => (
                <button className="tile-border-wrapper" /* href={tile.link} */
                    key={index}
                    onClick={() => {
                        setPage(tile.id)
                        displayModal(true);
                    }}
                >
                    <span className="tile-description">
                        <span className="tile-description-text">{tile.descr}</span>
                    </span>
                    <span className="tile-text-wrapper">
                        <span className="tile-text">{tile.title}</span>
                    </span>
                </button>
            ))
        }</div>
    );
}

function Domains() {
    const [showDomainModal, displayDomainModal] = useState(false);
    const [domainPage, setDomainPage] = useState('technical');

    useEffect(() => {
        if(showDomainModal === true)
            document.getElementsByTagName('body')[0].style.overflowY = 'hidden';
        else
            document.getElementsByTagName('body')[0].style.overflowY = 'scroll';
    });

    const tilesRow1 = [
        {
            title: 'Technical', id: 'technical',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        },
        {
            title: 'Design', id: 'design',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        },
        {
            title: 'Editing', id: 'editing',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        }
    ];
    const tilesRow2 = [
        {
            title: 'Content', id: 'content',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        },
        {
            title: 'PR and Outreach', id: 'proutreach',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        },
        {
            title: 'Event and Resource', id: 'event',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        }
    ];
    return (
        <Fragment>
            {showDomainModal && < DomainModal domain={domainPage} displayModal={displayDomainModal} />}
            <div className="grid6">
                <h2 className="grid-heading">Domains</h2>
                <TileRow row={tilesRow1} displayModal={displayDomainModal} setPage={setDomainPage} />
                <TileRow row={tilesRow2} displayModal={displayDomainModal} setPage={setDomainPage} />
            </div>
            <Outlet />
        </Fragment>
    );
}

export default Domains;
