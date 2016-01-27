import React, {Component} from 'react';
import {render} from 'react-dom';

class Wall extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h1>This is the wall</h1>
		);
	}

}

Wall.displayName = "Wall Name";

export default Wall;