import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';

const VideoPlayer = ({
											 width,
											 height,
											 url,
											 controls,
											 pip,
											 autoPlay,
											 loop,
											 onReady,
											 onStart,
											 onPlay,
											 onProgress,
											 onDuration,
											 onPause,
											 onBuffer,
											 onBufferEnd,
											 onSeek,
											 onEnded,
											 onError,
											 onEnablePIP,
											 onDisablePIP
										 }) => (
	<img
		src="http://10.20.20.50:8080/video"
	/>
);

VideoPlayer.defaultProps = {
	width: '100%',
	height: '100%',
	controls: true,
	pip: true,
	autoPlay: false,
	loop: false,
	onReady: () => {},
	onStart: () => {},
	onPlay: () => {},
	onProgress: () => {},
	onDuration: () => {},
	onPause: () => {},
	onBuffer: () => {},
	onBufferEnd: () => {},
	onSeek: () => {},
	onEnded: () => {},
	onError: () => {},
	onEnablePIP: () => {},
	onDisablePIP: () => {}
};

VideoPlayer.propTypes = {
	url: PropTypes.string.isRequired,
	width: PropTypes.string,
	height: PropTypes.string,
	controls: PropTypes.bool,
	pip: PropTypes.bool,
	autoPlay: PropTypes.bool,
	loop: PropTypes.bool,
	onReady: PropTypes.func,
	onStart: PropTypes.func,
	onPlay: PropTypes.func,
	onProgress: PropTypes.func,
	onDuration: PropTypes.func,
	onPause: PropTypes.func,
	onBuffer: PropTypes.func,
	onBufferEnd: PropTypes.func,
	onSeek: PropTypes.func,
	onEnded: PropTypes.func,
	onError: PropTypes.func,
	onEnablePIP: PropTypes.func,
	onDisablePIP: PropTypes.func
};

export default VideoPlayer;
