import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return(
		<div className="imageLinkForm">
			<p className="textPrompt">
				{'This Magic Brain will detect faces in pictures.'}
			</p>
			<div>
				<input className="inputLink" type='text' onChange={onInputChange}/>
				<button className="buttonDetect" onClick={onButtonSubmit}>Detect</button>
			</div>
		</div>
	);
}

export default ImageLinkForm;