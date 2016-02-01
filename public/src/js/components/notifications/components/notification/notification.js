import React from 'react';
import Classnames from 'classnames';

import BaseComponent from '../../../base-component/base-component';

class Notification extends BaseComponent {

	constructor(props) {
		super(props);
	}

	render() {
		let notifClass = Classnames({
			'notification fadeIn animated': true,
			'notification--alert': this.props.type === 'alert',
			'notification--info': this.props.type === 'info',
			'notification--success': this.props.type === 'success'
		});

		return (
			<div className = {notifClass}> 
				<p>{this.props.content}</p>
			</div>
		);
	}

}

Notification.displayName = 'Notification element';

Notification.propsType = {
	'content': React.PropTypes.string.isRequired,
	'type': React.PropTypes.string
};

Notification.defaultProps = {
	'content': 'A new notification!. Yey!',
	'type': 'info'
};

export default Notification;