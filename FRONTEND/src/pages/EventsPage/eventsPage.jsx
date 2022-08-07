<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import "./eventsPageStyles.scss";
import EventsContainer from "../../components/events/eventsContainer";
import {
	getEvents,
	getOngoingEvents,
	getPastEvents,
	getUpcomingEvents,
} from "../../actions/events";
import { useDispatch, useSelector } from "react-redux";

const EventsPage = () => {
	const dispatch = useDispatch();
	const getUpcoming = () => dispatch(getUpcomingEvents());
	const getAll = () => dispatch(getEvents());
	const getOngoing = () => dispatch(getOngoingEvents());
	const getPast = () => dispatch(getPastEvents());

	useEffect(() => {
		dispatch(getEvents());
	}, [dispatch]);

	const events = useSelector((state) => state.events);

	return (
		<div className='events'>
			<div className='top'>
				<button onClick={getAll}>All events</button>
				<button onClick={getUpcoming}>Upcoming events</button>
				<button onClick={getOngoing}>Ongoing events</button>
				<button onClick={getPast}>Past events</button>
			</div>

			{events.map((event, key) => (
				<EventsContainer key={key} event={event} />
			))}
		</div>
	);
};

export default EventsPage;
=======
import React, { useContext, useEffect, useState } from 'react';
import './eventsPageStyles.scss';
import EventsContainer from '../../components/events/eventsContainer';
import { getOngoingEvents, getPastEvents, getUpcomingEvents } from '../../actions/events';
import { useDispatch, useSelector } from 'react-redux';
import { PopupContext } from '../../contexts/popupContext';


const EventsPage = () => {

  const { popupTrigger } = useContext(PopupContext);
  const [eventType, setEventType] = useState("Ongoing");

  const dispatch = useDispatch();

  useEffect(() => {
    if (eventType === "Ongoing") {
      dispatch(getOngoingEvents());
    }
    else if (eventType === "Upcoming") {
      dispatch(getUpcomingEvents());
    }
    else if (eventType === "Past") {
      dispatch(getPastEvents());
    }
    
  }, [dispatch, eventType]);
  
  const events = useSelector((state) => state.events);

  
  return (
    <div className="events">
      <div className="content">
        <h1>Our Events</h1>
        <div className="pageContainer">
          <div className="divButtons">
            <button
              style={{
                backgroundColor: eventType === "Upcoming" ? "#FFC776" : "",
                border: eventType === "Upcoming" ? "1px solid #B9B9B9" : "0px",
              }}
              onClick={() => setEventType("Upcoming")}
            >
              Upcoming events
            </button>

            <button
              style={{
                backgroundColor: eventType === "Ongoing" ? "#FFC776" : "",
                border: eventType === "Ongoing" ? "1px solid #B9B9B9" : "0px",
              }}
              onClick={() => setEventType("Ongoing")}
            >
              Ongoing events
            </button>

            <button
              style={{
                backgroundColor: eventType === "Past" ? "#FFC776" : "",
                border: eventType === "Past" ? "1px solid #B9B9B9" : "0px",
              }}
              onClick={() => setEventType("Past")}
            >
              Past events
            </button>
          </div>

          <div className="bottomEventContainer">
            {events.map((event, key) => (
              <EventsContainer
                key={key}
                event={event}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default EventsPage;
>>>>>>> 0f39e14af8c812834d6d0c952d221e8ce07ad2d9
