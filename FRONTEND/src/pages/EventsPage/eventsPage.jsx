import React from 'react';
import './eventsPageStyles.scss';
import EventsContainer from '../../components/events/eventsContainer';

const EventsPage = () => {
  return (
    <div className='events'>
      <div className="top">
        <button>Upcoming events</button>
        <button>Ongoing events</button>
        <button>Past events</button>
      </div>
      <EventsContainer/>
      <EventsContainer/>
    </div>
  )
}

export default EventsPage;