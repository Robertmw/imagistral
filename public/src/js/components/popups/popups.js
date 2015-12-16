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

import LoginPopup from './components/login';
import NewCanvasPopup from './components/new-canvas';
import OpenFilePopup from './components/open-file';

class Popups extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_closePopup');
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

	_closePopup(e) {
		e.stopPropagation();
		this.props.actions.closePopup();
	}

	render() {
		const props = this.props.popups;

		return (
			<section className={props.active !== '' ? "popups active" : "popups"}>
				{props.active === 'login' && <LoginPopup handleClose={this.props.actions.closePopup} />}
				{props.active === 'newCanvas' && <NewCanvasPopup handleClose={this.props.actions.closePopup} />}
				{props.active === 'openFile' && <OpenFilePopup handleClose={this.props.actions.closePopup} />}
				<div 
					className="popups__overlay"
					onClick={this._closePopup}
				/>
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