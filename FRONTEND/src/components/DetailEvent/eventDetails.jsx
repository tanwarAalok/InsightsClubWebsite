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
        stroke-width="0"
        viewBox="0 0 1024 1024"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
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

