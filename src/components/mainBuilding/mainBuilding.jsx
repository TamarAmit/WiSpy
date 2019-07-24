import React, { Component } from 'react';
import './mainBuilding.css'

class MainBuilding extends Component {

	constructor(props) {
		super(props);
		this.state = {manInTheRoomStatus: "unvisible", score: 0};
		this. myVar  = "a";
	}

	componentDidMount() {
		//this.timerID = setInterval(() => this.checkManInTheRoomStatus(), 1000);
		this.checkManInTheRoomStatus();
	}

	checkManInTheRoomStatus(){
		if("a" === this.myVar ){
			this.setState({
				manInTheRoomStatus: "visible",
				score: 60
			});

			this.myVar = "b";
		} else {
			this.setState({
				manInTheRoomStatus: "unvisible",
				score: 60
			});

			this.myVar = "a"
		}
	}

	render() {
		let showHideManClass;
		let scoreClass
		if(this.state.manInTheRoomStatus === "visible") {
			showHideManClass = "manVisible";
			scoreClass = this.state.score > 50 ? "strongVisible" : "weakVisible";
		} else {
			showHideManClass = "manUnvisible";
			scoreClass = "scoreUnvisible";
		}

		return (
			<div id="mainBuilding">
				<div className="building-border">
					<h2>man status: {this.state.manInTheRoomStatus}.</h2>
					<div className="building-pic">
						<img src="./mainBuilding.png" />
					</div>
					<div id="manInTheRoom" className={showHideManClass + " " + scoreClass}></div>
				</div>
			</div>
	)}
}

export default MainBuilding
