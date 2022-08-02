import React, { Fragment } from "react";
import "@fontsource/mulish";
import './domains.css';
import { Outlet } from "react-router-dom";

function TileRow({ row }) {
    return (
        <div className="tile-row">{
            row.map((tile, index) => (
                <a className="tile-border-wrapper" href={tile.link} key={index}>
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
        { title: 'Technical', link: '/team/technical' },
        { title: 'Design', link: '/team/design' },
        { title: 'Editing', link: '/team/editing' }
    ];
    const tilesRow2 = [
        { title: 'Content', link: '/team/content' },
        { title: 'PR and Outreach', link: '/team/proutreach' },
        { title: 'Event and Resource', link: '/team/event' }
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
