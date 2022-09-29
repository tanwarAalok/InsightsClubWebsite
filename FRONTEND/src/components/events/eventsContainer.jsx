import React, { useContext} from 'react';
import './eventContainerStyles.scss';
import EventDetails from '../DetailEvent/eventDetails';
import { PopupContext } from '../../contexts/popupContext';

const EventsContainer = ({ event }) => {
  const { popupTrigger, setPopupTrigger } = useContext(PopupContext);

  return (
    <>
      <div onClick={() => setPopupTrigger(true)} className="event-container">
        <div className="left">
          <img src={event.image.url} alt="eventImage" />
        </div>

        <div className="right">
          <div className="firstdetails">
            <h2>{event.title}</h2>
            {event.status !== "past" ? <div className="time">13:00</div> : ""}
          </div>
          <p>{event.description}</p>
          <div className="lastdetails">
            <div className="modeVenue">
              <div className="mode">Mode: {event.mode}</div>
              {event.mode !== "Online" ? (
                <div className="venue">Venue: {event.venue}</div>
              ) : (
                ""
              )}
            </div>
            {event.status !== "past" ? <div className="date">13 Feb</div> : ""}
          </div>
        </div>
      </div>
      {popupTrigger ? (
        <div className="popup">
          <EventDetails event={event} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default EventsContainer;

