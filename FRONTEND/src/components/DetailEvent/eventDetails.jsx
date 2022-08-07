import React, { useContext, useEffect } from 'react';
import { EventDataContext } from '../../contexts/eventDataContext';
import './eventDetails.styles.scss';

const EventDetails = ({event}) => {

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

  return  (
    <div className="detailMainContainer">
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
            <div className="mode">
              Mode: {event.mode}
            </div>
            {
              checkVenue ? (<div className="venue">Venue: {event.venue}</div>) : ''
            }
          </div>
          {
            checkButton ? (<button>{buttonText}</button>) : ''
          }
        </div>
      </div>
    </div>
  ) ;
}

export default EventDetails