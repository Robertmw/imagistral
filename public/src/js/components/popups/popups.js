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
import NewCanvasPopup from './components/new-canvas-popup';

class Popups extends BaseComponent {

	constructor(props) {
		super(props);
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
			<section className={props.active !== '' ? "popups active" : "popups"}>
				{props.active === 'login' && <LoginPopup handleClose={this.props.actions.closePopup} />}
				{props.active === 'newCanvas' && <NewCanvasPopup handleClose={this.props.actions.closePopup} />}
			</section>
		);
	}

}


export default branch(Popups, {
	cursors: {
		popups: ['popups']
	},
	actions: {
		closePopup: actions.closePopup
	}
});