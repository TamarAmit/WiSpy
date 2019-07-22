import React, { Component } from 'react';
import './video.css'

class Video extends Component {
	render() {
		return (
			<div id="video">
				<video className="video-container border" autoPlay={false} loop controls>
					<source src="./tempVideo.mp4" type="video/mp4" />
				</video>
				<video className="video-container border" autoPlay={false} loop controls>
					<source src="./tempVideo.mp4" type="video/mp4" />
				</video>
			</div>
	)}
}

export default Video