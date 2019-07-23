import React from 'react';

import ListItem from './listItem'

import './list.css';


class List extends React.Component {

	constructor(props) {
		super(props);

		this.data  = this.getMockData();
	}

	getMockData(){
		return [
			{'phone': '+9725427545', 'isHacked': true, 'isCameraOn': true, 'isRecorded': true, isVerifyIdentity:true},
			{'phone': '+9722797577', 'isHacked': false, 'isCameraOn': false, 'isRecorded': false},
			{'phone': '+9725077233', 'isHacked': true, 'isCameraOn': false, 'isRecorded': false},
			{'phone': '+9725072343', 'isHacked': true, 'isCameraOn': false, 'isRecorded': true}
		]
	}

	render() {
		return (
			<div className='list-container'>
				{this.data.map(item => (
					<ListItem
						key={item.phone}
						{...item}
					/>))}
			</div>
		);
	}
}

export default List;
