import {
	FETCH_ALL,
	CREATE,
	UPDATE,
	DELETE,
	FAIL,
} from "../constants/eventsActionTypes";
import { Fetch, Create, Update, Delete } from "../api/index.js";
import axios from "axios";

<<<<<<< Updated upstream
let eventsUrl = "https://insights-club-api.onrender.com/event";
=======
// let eventsUrl = "https://insights-api.onrender.com/event";  
let eventsUrl = "http://localhost:8080/event";  
>>>>>>> Stashed changes

export const getEvents = () => async (dispatch) => {
	try {
		const { data } = await Fetch(`${eventsUrl}/all`);
		dispatch({ type: FETCH_ALL, payload: data.events });
	} catch (error) {
		console.log(error.message);
	}
};
export const getEventByType = (type) => async (dispatch) => {
	try {
		switch(type){
			case "Ongoing":
				eventsUrl = `${eventsUrl}/all?status=ongoing`;
				break;
			case "Upcoming":
				eventsUrl = `${eventsUrl}/all?status=upcoming`;
				break;
			case "Past":
				eventsUrl = `${eventsUrl}/all?status=past`;
				break;
			default:
				eventsUrl = `${eventsUrl}/all`;
		}
		const { data } = await Fetch(eventsUrl);
		dispatch({ type: FETCH_ALL, payload: data.events });
	} catch (error) {
		console.log(error.message);
	}
};

export const getEventDetail = ({id}) => async (dispatch) => {
  try {
    const { data } = await Fetch(`${eventsUrl}/id`);
    dispatch({ type: FETCH_ALL, payload: data.events });
  } catch (error) {
    console.log(error.message);
  }
};

export const getOngoingEvents = () => async (dispatch) => {
	try {
		const { data } = await Fetch(`${eventsUrl}/all?status=ongoing`);
		dispatch({ type: FETCH_ALL, payload: data.events });
	} catch (error) {
		console.log(error.message);
	}
};
export const getUpcomingEvents = () => async (dispatch) => {
	try {
		const { data } = await Fetch(`${eventsUrl}/all?status=upcoming`);
		dispatch({ type: FETCH_ALL, payload: data.events });
	} catch (error) {
		console.log(error.message);
	}
};
export const getPastEvents = () => async (dispatch) => {
	try {
		const { data } = await Fetch(`${eventsUrl}/all?status=past`);
		dispatch({ type: FETCH_ALL, payload: data.events });
	} catch (error) {
		console.log(error.message);
	}
};

export const createEvents = (event) => async (dispatch) => {
	const config = {
		headers: { "Content-Type": "application/json" },
	};
	try {
		const { data } = await axios.post(`${eventsUrl}/new`, event, config);

		dispatch({ type: CREATE, payload: data });
	} catch (error) {
		dispatch({
		type: FAIL,
		payload: error.response.data.message,
		});
	}
};

export const updateEvents = (id, event) => async (dispatch) => {
	try {
		const { data } = await Update(id, event, eventsUrl);

		dispatch({ type: UPDATE, payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const deleteEvents = (id) => async (dispatch) => {
	try {
		await Delete(id, eventsUrl);

		dispatch({ type: DELETE, payload: id });
	} catch (error) {
		console.log(error.message);
	}
};
