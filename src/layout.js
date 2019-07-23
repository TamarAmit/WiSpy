import React, { Component } from 'react';

import Video from './components/video/video.jsx';
import List from './components/list/list';
import AudioVisualizer from './components/audioVisualizer/audioVisualizer.jsx';

import './style/layout.css'

class Layout extends Component {
	render() {
		return (
			<div className="box">
			  <div className="header">Header</div>
        <div className="content">
            <div className="content-inner left-area">
							<Video/>
						</div>
						<div className="content-inner main border">Main</div>
						<div className="content-inner right-area border">
							<AudioVisualizer />
							<List />
						</div>
        </div>
		    <div className="footer">
            <div className="footer-inner resources border" >
							<div className="title">
								<div className="text">ספריית מדיה</div>
							</div>
							<div className="resources-pic">
								<img src="./pictures.png" />
							</div>
						</div>
    			  <div className="footer-inner timeline border">
							<div className="title">
								<div className="text">יומן מבצעים</div>
								<div className="time">יום שלישי, 22.11.2020</div>
							</div>
							<div className="timeline-pic">
								<img src="./timeline.png" />
							</div>
						</div>
			  </div>
			</div>
		)
	}
}

export default Layout;
