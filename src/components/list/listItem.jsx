import React from 'react';

import './listItem.css';

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.clickOnVisualizer = this.clickOnVisualizer.bind(this);
	}

	clickOnVisualizer() {
		if (!this.refs.visualizerImage.style.display || this.refs.visualizerImage.style.display === "none") {
			this.refs.visualizerImage.style.display = "inline";
		} else {
			this.refs.visualizerImage.style.display = "none";
		}
		console.log(this.refs);
	}

	render() {
		return (
			<div className="list">
				<div className="list-item">
					<div className="list-item-phone">
						<div className="list-item-phone-number">
							<img src="phone.png" />
							{this.props.phone}
							<img src="phone.png" />
						</div>
						<div className="list-item-phone-icons">
							<img src="phone.png" />
							<img src="phone.png" />
						</div>
					</div>
					<div className="list-item-plus" onClick={this.clickOnVisualizer} />
				</div>
				<div className="visualizer-image" ref="visualizerImage">
					<img src="visualizer_img.png" />
				</div>
				</div>

		);
	}
}

export default ListItem;
