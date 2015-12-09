/**
 *
 * Popups Compoent
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import * as actions from './actions';

import LoginPopup from './components/login-popup';

class Popups extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_handleCloseClick', '_shouldBeVisible');
	}

	_handleCloseClick() {
		this.props.actions.close();
	}

	_shouldBeVisible(props) {
		let popup;

		for (popup of Object.keys(props)) {
			if (props[popup].hasOwnProperty('show') && props[popup].show) {
				return true;
			}
		}

		return false;
	}

	render() {
		const props = this.props.popups;

		return (
			<section className={this._shouldBeVisible(props) ? "popups active" : "popups"}>
				{
					props.login.show &&
					<LoginPopup handleCloseClick={this._handleCloseClick} />
				}
			</section>
		);
	}

}


export default branch(Popups, {
	cursors: {
		popups: ['popups']
	},
	actions: {
		close: actions.closePopup
	}
});