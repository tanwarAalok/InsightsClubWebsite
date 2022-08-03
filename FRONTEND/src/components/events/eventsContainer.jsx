import React from 'react';
import './eventContainerStyles.scss'

const EventsContainer = ({ event }) => {
  // console.log(event);
  return (
      <div className='container'>
          
          <div className="left">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <button>More details</button>
          </div>

          <div className="right">
            <img src={event.image.url} alt="eventImage" />
          </div>

    </div>
  )
}

export default EventsContainer;