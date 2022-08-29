import React, { useContext, useEffect } from 'react';
import { EventDataContext } from '../../contexts/eventDataContext';
import './eventDetails.styles.scss';
import { PopupContext } from '../../contexts/popupContext';

const EventDetails = ({ event }) => {
  
  const { setPopupTrigger } = useContext(PopupContext);

  const { checkVenue, buttonText, setButtonText, checkButton, setCheckButton } =
    useContext(EventDataContext);


  useEffect(() => {
    const checkConditions = () => {
      if (event.status !== "upcoming") {
        setCheckButton(true);
      }

      if (event.status === "past") {
        setButtonText("View");
      }
      else {
        setButtonText("Register");
      }
      
    };
    checkConditions();
  });

  return (
    <div className="detailMainContainer">
      <svg
        onClick={() => setPopupTrigger(false)}
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        width="48px"
        height="48px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z" />
      </svg>
      <div className="imgContainer">
        <img src={event.image.url} alt="" />
        <div className="date">13 Feb</div>
      </div>

      <div className="eventDetailsContainer">
        <div className="topdetails">
          <h2>{event.title}</h2>
          <div className="time">13:00</div>
        </div>
        <p>{event.description}</p>
        <div className="bottomdetails">
          <div className="modeVenue">
            <div className="mode">Mode: {event.mode}</div>
            {checkVenue ? (
              <div className="venue">Venue: {event.venue}</div>
            ) : (
              ""
            )}
          </div>
          {checkButton ? <button>{buttonText}</button> : ""}
        </div>
      </div>
    </div>
  );
}

export default EventDetails

