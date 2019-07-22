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
            <div className="footer-inner resources border" >Resources</div>
    			  <div className="footer-inner timeline border">Timeline</div>
			  </div>
			</div>
		)
	}
}

export default Layout;
