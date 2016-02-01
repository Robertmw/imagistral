import React from 'react';
import Classnames from 'classnames';
import {branch} from 'baobab-react/higher-order';
//import * as actions from './actions';

import BaseComponent from '../base-component/base-component';
import Notification from './components/notification/notification';

class Notifications extends BaseComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const props = this.props;
		const notifClass = Classnames({
			'notifications': true,
			'notifications--show': props.elements !== null
		});

		const notifList = props.elements.map((element, index) => {
				return (
						<Notification
							content = {element.content}
							key = {index}
							type = {element.type}
						/>
				);
		});

		return (
			<div className = {notifClass}>
				{notifList}
			</div>
			);
	}

}

export default branch(Notifications, {
	cursors: {
		'elements': ['notifications']
	}
});