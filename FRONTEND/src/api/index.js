import axios from "axios";

//blogs
export const Fetch = (url) => axios.get(url);
export const Create = (New, url) => axios.post(url, New);
export const Update = (id, Updated, url) =>
axios.patch(`${url}/${id}`, Updated);
export const Delete = (id, url) => axios.delete(`${url}/${id}`);
