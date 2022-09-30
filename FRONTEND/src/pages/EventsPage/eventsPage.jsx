import React, { useEffect, useState } from "react";
import "./eventsPageStyles.scss";
import EventsContainer from "../../components/events/eventsContainer";
import {
	getOngoingEvents,
	getPastEvents,
	getUpcomingEvents,
} from "../../actions/events";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer/Footer";

const EventsPage = () => {
	const [eventType, setEventType] = useState("Past");

	const dispatch = useDispatch();

	useEffect(() => {
		if (eventType === "Ongoing") {
			dispatch(getOngoingEvents());
		} else if (eventType === "Upcoming") {
			dispatch(getUpcomingEvents());
		} else if (eventType === "Past") {
			dispatch(getPastEvents());
		}
	}, [dispatch, eventType]);

  const events = useSelector((state) => state.events);

	return (
    <>
      <div className="events">
        <div className="content">
          <h1>Our Events</h1>
          <div className="pageContainer">
            <div className="divButtons">
              <button
                style={{
                  backgroundColor: eventType === "Upcoming" ? "#FFC776" : "",
                  border:
                    eventType === "Upcoming" ? "1px solid #B9B9B9" : "0px",
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
              {events.length > 0 ? events.map((event) => (
                <EventsContainer key={event._id} event={event} />
              )) : (<h2 style={{textAlign: "center"}}>No {eventType} Events</h2>)}
            </div>
          </div>
        </div>
      </div>
	  <Footer/>
    </>
  );
};

export default EventsPage;
