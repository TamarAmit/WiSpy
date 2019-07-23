import React from 'react';

import './listItem.css';

class ListItem extends React.Component {
	constructor(props) {
		super(props);

		this.openVisualizer = this.openVisualizer.bind(this);
		this.openSound = this.openSound.bind(this);
		this.openContextMenu = this.openContextMenu.bind(this);
		this.contextMenuItemClick = this.contextMenuItemClick.bind(this);
	}

	openSound() {
		if (!this.refs.soundImage.style.display || this.refs.soundImage.style.display === "none") {
			this.refs.soundImage.style.display = "inline";
		} else {
			this.refs.soundImage.style.display = "none";
		}
	}

	openVisualizer() {
		if (!this.refs.visualizerImage.style.display || this.refs.visualizerImage.style.display === "none") {
			this.refs.visualizerImage.style.display = "inline";
		} else {
			this.refs.visualizerImage.style.display = "none";
		}
	}

	openContextMenu() {
		if (!this.refs.contextMenu.style.display || this.refs.contextMenu.style.display === "none") {
			this.refs.contextMenu.style.top = this.refs.contextMenu.parentElement.parentElement.offsetTop + "px";
			this.refs.contextMenu.style.display = "inline";
		} else {
			this.refs.contextMenu.style.display = "none";
		}
	}

	contextMenuItemClick() {
		console.log("Tamar is the BEST!!!");
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
							<img src="phone.png" onClick={this.openSound} />
							<img src="phone.png" onClick={this.openVisualizer} />
						</div>
					</div>
					<div className="list-item-plus" onClick={this.openContextMenu} />
					<div className="context-menu" ref="contextMenu">
						<div className="context-menu-item"><div className="icon data" /><div className="text">הצג נתוני מכשיר</div></div>
						<div className="context-menu-item"><div className="icon block" /><div className="text">חסום קליטה</div></div>
						<div className="context-menu-item"><div className="icon listening" /><div className="text">הפעל האזנה</div></div>
						<div className="context-menu-item"><div className="icon picture" /><div className="text">הפעל מצלמה</div></div>
						<div className="context-menu-item"><div className="icon diary" /><div className="text">הצג יומן שיחות</div></div>
						<div className="context-menu-item" onClick={this.contextMenuItemClick}><div className="icon people" /><div className="text">הצג אנשי קשר</div></div>
						<div className="context-menu-item"><div className="icon library" /><div className="text">הצג ספריית מדיה</div></div>
					</div>
				</div>
				<div className="visualizer-image" ref="visualizerImage">
					<img src="visualizer_img.png" />
				</div>
				<div className="sound-image" ref="soundImage">
					<img src="sound_img.png" />
				</div>
			</div>
		);
	}
}

export default ListItem;
