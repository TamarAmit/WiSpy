import React from 'react';

import './listItem.css';

class ListItem extends React.Component {

	render() {
		return (
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
				<div className="list-item-plus" />
			</div>
		);
	}
}

export default ListItem;
