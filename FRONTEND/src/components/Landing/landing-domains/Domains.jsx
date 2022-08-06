import React, { Fragment } from "react";
import "@fontsource/mulish";
import './domains.css';
import { Outlet } from "react-router-dom";

function TileRow({ row }) {
    return (
        <div className="tile-row">{
            row.map((tile, index) => (
                <a className="tile-border-wrapper" href={tile.link} key={index}>
                    <span className="tile-description">
                        <span className="tile-description-text">{tile.descr}</span>
                    </span>
                    <span className="tile-text-wrapper">
                        <span className="tile-text">{tile.title}</span>
                    </span>
                </a>
            ))
        }</div>
    );
}

function Domains() {
    const tilesRow1 = [
        {
            title: 'Technical', link: '/team/technical',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        },
        {
            title: 'Design', link: '/team/design',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        },
        {
            title: 'Editing', link: '/team/editing',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        }
    ];
    const tilesRow2 = [
        {
            title: 'Content', link: '/team/content',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        },
        {
            title: 'PR and Outreach', link: '/team/proutreach',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        },
        {
            title: 'Event and Resource', link: '/team/event',
            descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed Ut enim ad minim veniam, quis modo consequat. lla pariatur. Lorem ipsum dolor sit amet.'
        }
    ]
    return (
        <Fragment>
            <div className="grid6">
                <h2 className="grid-heading">Domains</h2>
                <TileRow row={tilesRow1} />
                <TileRow row={tilesRow2} />
            </div>
            <Outlet />
        </Fragment>
    );
}
/* .map((item, index) => (
    <span className="indent" key={index}>
        {index}
    </span> */
export default Domains;
