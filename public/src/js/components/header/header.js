/**
 *
 * Header Component
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import * as actions from './actions';

import {isEmpty} from '../../utils.js';

const displayName = 'Header';

class Header extends BaseComponent {

	constructor (props) {
		super(props);

		this._bind('_checkLogin');
	}

	_checkLogin(user) {
		let value;

		if (isEmpty(user)) {
			value = (
				<div className="work-buttons">
					<div 
						className="work--upload"
						onClick={this.props.actions.openLogin}
					>
						<p>Login</p>
					</div>
				</div>
			);
		} else {
			value = (
				<div className="work-buttons">
					<div className="work--download">
						<span className="fa fa-lg fa-cloud-download"></span>
					</div>
					<div className="work--upload">
						<p>Import</p>
					</div>
					<div className="work--publish">
						<p>Publish</p>
					</div>
					<div className="work--help">
						<span className="fa fa-lg fa-question-circle"></span>
					</div>
					<div className="work--wall">
						<span className="fa fa-lg fa-th"></span>
					</div>
					<div className="work--profile">
						<img
							className="avatar"
							src={this.props.user.avatar}
						/>
					</div>
				</div>
			);
		}

		return value;
	}

	render() {
		let loggedButton = this._checkLogin(this.props.user);

		return (
			<header>
				<div className="logo">
					<span className="fa fa-lg fa-camera"></span>
				</div>
				<div className="work-title">
					<span className="fa fa-header"></span>
					<h4>{this.props.title}</h4>
				</div>
				<div className="work-history">
					<span className="fa fa-lg fa-reply unavailable"></span>
					<span className="fa fa-lg fa-share"></span>
				</div>
				{loggedButton}
			</header>
		);
	}

}

export default branch(Header, {
	cursors: {
		title: ['canvasTitle'],
		user: ['user']
	},
	actions: {
		openLogin: actions.openLoginPopup
	}
});