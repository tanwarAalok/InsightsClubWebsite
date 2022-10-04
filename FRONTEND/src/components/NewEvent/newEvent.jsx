import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './newEvent.styles.scss'
import { createEvents } from '../../actions/events';

const NewEvent = () => {

    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [shortDescription, setshortDescription] = useState("");
    const [date, setDate] = useState(null);
    const [description, setDescription] = useState("");
    const [domain, setdomain] = useState("");
    const [department, setdepartment] = useState("");
    // const [status, setstatus] = useState("");
    const [mode, setmode] = useState("");
    const [venue, setvenue] = useState("");
  const [image, setImage] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [fileInputState, setFileInputState] = useState('');

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setFileInputState(e.target.value);
  }

    const handleSubmit = (e) => {
      e.preventDefault();

      const myForm = new FormData();

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) setImage(reader.result);
      }
      reader.readAsDataURL(selectedFile);


      myForm.set("title", name);
      myForm.set("shortDescription", shortDescription);
      myForm.set("description", description);
      myForm.set("date", date);
      myForm.set("domain", domain);
      myForm.set("department", department);
      myForm.set("status", "upcoming");
      myForm.set("mode", "Online");
      myForm.set("venue", venue);

        
      dispatch(createEvents(myForm));
    };

  return (
    <div className="form-main-container">
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Event name"
        />
        <input
          onChange={(e) => setDate(e.target.value)}
          type="datetime-local"
          placeholder="Date"
        />
        <input
          onChange={(e) => setshortDescription(e.target.value)}
          type="text"
          placeholder="Short Description"
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Description"
        />
        <input
          onChange={(e) => setdomain(e.target.value)}
          type="text"
          placeholder="Domain"
        />
        <input
          onChange={(e) => setdepartment(e.target.value)}
          type="text"
          placeholder="Department"
        />
        <label htmlFor="mode">Mode</label>
        <select onChange={(e) => setmode(e.target.value)} name="mode" id="mode">
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
          <option value="Hybrid">Hybrid</option>
        </select>
        <input
          onChange={(e) => setvenue(e.target.value)}
          type="text"
          placeholder="Venue"
        />
        <input
          onChange={handleFileInputChange}
          value={fileInputState}
          type="file"
          placeholder="image"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewEvent