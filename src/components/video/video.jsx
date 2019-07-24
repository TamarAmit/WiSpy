import React, { Component } from 'react';
import VideoPlayer from '../video-player';
import './video.css'

class Video extends Component {
	render() {
		return (
			<div id="video">
				<div className="border">
					<div className="video-title">
						<div className="time">
							יום שלישי, 22.11.2020, 12.37
						</div>
						<div className="title">אירועים בזירה</div>
					</div>
					<div className="video-pic">
						<img src="./video_picture1.png" />
					</div>
					{/*<video className="video-container" autoPlay={false} loop controls>*/}
						{/*<source src="./tempVideo.mp4" type="video/mp4" />*/}
					{/*</video>*/}
					<div className="video-text">
						<div className="first-line">
							זיהוי מבוקש, כרים ג'אבאר, הצלבת סלולר ותמונה, ודאות 92%
						</div>
						<div className="second-line">
							<div>IMSI: 53462343512413517389</div>
							<div>IMRI: 53462343512413517389</div>
						</div>
					</div>
				</div>
				<div className="border">
					<div className="video-title">
						<div className="close-title">
							רוכ"ש 8
						</div>
						<div className="title">שידור חי</div>
					</div>
					<div className="video-pic">
						<VideoPlayer
							url="https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4"
						/>
					</div>
				</div>
			</div>
	)}
}

export default Video
