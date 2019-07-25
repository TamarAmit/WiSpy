import React, {Component} from 'react';
import './mainBuilding.css'
import io from 'socket.io-client';

const socket = io('http://10.20.20.102:3030');

const WifiTransmitterImage = ({ top, left }) => {
	return (
			<div className={`sensor`} style={{top, left}}/>
	)
};

class MainBuilding extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isVisible: false,
			score: 0
		};
	}

	componentDidMount() {
		// this.timerID = setInterval(() => this.checkManInTheRoomStatus(), 1000);
		// this.checkManInTheRoomStatus();

		socket.on('message', (data) => {
			console.log(data);
			const score = parseInt(data.score);

			console.log(score);
			this.setState({
				isVisible: score >= 50,
				score: parseInt(data.score),
				timestamp: data.timestamp
			})
		});

		socket.on('connect_error', (error) => {
			console.log(error)
		});

		socket.on('error', (error) => {
			console.log(error);
		});
	}

	componentWillUnmount() {
		socket.disconnect();
	}

	render() {
		let indications;
		let scoreClass;
		console.log(this.state);
		if (this.state.isVisible) {
			indications = "show";
			scoreClass = this.state.score > 50 ? "green" : "yellow";
		} else {
			indications = "hide";
			scoreClass = "scoreUnvisible";
		}

		return (
			<div id="mainBuilding">
				<div className="building-border">
					<div className="building-pic">
						<img src="./mainBuilding.png"/>
					</div>
					<WifiTransmitterImage left={'65px'} top={'240px'}/>
					<WifiTransmitterImage left={'200px'} top={'205px'}/>
					<WifiTransmitterImage left={'-164px'} top={'205px'}/>
					<div className={`indication-wrapper ${indications}`}>
						<div id="manInTheRoom" className={`man`}/>
						<div id="score" className={`score ${scoreClass}`}/>
					</div>
				</div>
			</div>
		)
	}
}

export default MainBuilding
