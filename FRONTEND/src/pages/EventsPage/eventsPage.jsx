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
