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

import LoginPopup from './components/login-popup';

class Popups extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_shouldBeVisible');
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
				{props.login.show && <LoginPopup />}
			</section>
		);
	}

}


export default branch(Popups, {
	cursors: {
		popups: ['popups']
	}
});