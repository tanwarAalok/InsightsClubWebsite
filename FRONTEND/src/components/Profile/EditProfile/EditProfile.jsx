import React from "react";
import "./EditProfile.css";

function EditProfile() {
	return (
		<div className='EditProfile-container'>
			<div className='EditProfile-profileEdit'>
				<button>Edit profile</button>
			</div>
			<div className='EditProfile-blogEdit'>
				<button>Edit blogs </button>
			</div>
		</div>
	);
}

export default EditProfile;
