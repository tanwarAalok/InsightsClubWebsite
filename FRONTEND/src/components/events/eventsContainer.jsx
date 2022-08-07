import React, { useEffect, useContext} from 'react';
import './eventContainerStyles.scss';
import EventDetails from '../DetailEvent/eventDetails';
import { PopupContext } from '../../contexts/popupContext';
import { EventDataContext } from '../../contexts/eventDataContext';

const EventsContainer = ({ event }) => {
  const { popupTrigger, setPopupTrigger } = useContext(PopupContext);
  const {checkVenue, setCheckVenue } = useContext(EventDataContext);

  useEffect(() => {
    const checkConditions = () => {
      if (event.mode !== "Online") {
        setCheckVenue(true);
      }
    };
    checkConditions();
  });

  return (
    <div onClick={() => setPopupTrigger(!popupTrigger)} className="container">
      <div className="left">
        <img src={event.image.url} alt="eventImage" />
      </div>

      <div className="right">
        <div className="firstdetails">
          <h2>{event.title}</h2>
          <div className="time">13:00</div>
        </div>
        <p>{event.description}</p>
        <div className="lastdetails">
          <div className="modeVenue">
            <div className="mode">Mode: {event.mode}</div>
            {checkVenue ? (
              <div className="venue">Venue: {event.venue}</div>
            ) : ""}
          </div>
          <div className="date">13 Feb</div>
        </div>
      </div>

      {popupTrigger ? (
        <div className="popup">
          <EventDetails event={event} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EventsContainer;