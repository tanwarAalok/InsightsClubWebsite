import React, { useEffect } from 'react';
import './eventsPageStyles.scss';
import EventsContainer from '../../components/events/eventsContainer';
import { getEvents } from '../../actions/events';
import { useDispatch, useSelector } from 'react-redux';

const EventsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const events = useSelector((state) => state.events);

  
  return (
    <div className="events">
      <div className="top">
        <button>Upcoming events</button>
        <button>Ongoing events</button>
        <button>Past events</button>
      </div>

      {events.map((event, key) => (
        <EventsContainer key={key} event={event} />
      ))}

    </div>
  );
}

export default EventsPage;