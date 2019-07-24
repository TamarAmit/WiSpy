import React from 'react';
import './audio.css'

export default class SkipExample extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const canvas = document.getElementById(this.props.uniqueId + '-canvas');
		const canvasCtx = canvas.getContext('2d');
		const WIDTH = canvas.width;
		const HEIGHT = canvas.height;
		// shape style
		canvasCtx.fillStyle = '#0f1319';
		canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
		canvasCtx.lineWidth = 2;
		canvasCtx.strokeStyle = '#43D594';
		// request frame
		let drawVisual;
		const audioElement = document.getElementById(this.props.uniqueId + '-audio');
		// make sure AudioContext will work fine in different browsers
		const AudioContext = window.AudioContext || window.webkitAudioContext;
		const audioCtx = new AudioContext();
		// copy audio source data to manipulate later
		this.source = audioCtx.createMediaElementSource(audioElement);
		// create audio analyser
		const analyser = audioCtx.createAnalyser();
		// set audio analyser
		analyser.fftSize = 2048;
		const bufferLength = analyser.frequencyBinCount;
		const dataArray = new Uint8Array(bufferLength);
		// Bind our analyser to the media element source.
		this.source.connect(analyser);
		this.source.connect(audioCtx.destination);
		// extract data
		analyser.getByteTimeDomainData(dataArray);
		function draw() {
			// repeat drawing by the browser
			drawVisual = requestAnimationFrame(draw);
			analyser.getByteTimeDomainData(dataArray);
			// clear the previous shape
			canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
			canvasCtx.beginPath();
			const sliceWidth = WIDTH * 1.0 / bufferLength;
			let x = 0;
			for(let i = 0; i < bufferLength; i++) {
				const v = dataArray[i] / 128.0;
				const y = v * HEIGHT / 2;
				if(i === 0) {
					canvasCtx.moveTo(x, y);
				} else {
					canvasCtx.lineTo(x, y);
				}
				x += sliceWidth;
			}
			canvasCtx.lineTo(canvas.width, canvas.height / 2);
			canvasCtx.stroke();
		}
		draw();
	}

	render() {
		return (
			<div key={Date.now()} className="audio">
				<audio id={this.props.uniqueId + '-audio'} src="http://10.20.20.50:8080/audio.wav" autoPlay crossOrigin="anonymous">
					Your browser does not support the audio element.
				</audio>
				<canvas id={this.props.uniqueId + '-canvas'}/>
			</div>
		)
	}
}
