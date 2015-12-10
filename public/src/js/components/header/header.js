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

		this._bind('_checkLogin', '_shouldEditTitle', '_handleTitleChange');
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

	_handleTitleChange(e) {
		this.props.actions.saveTitle(e.target.value);
	}

	_shouldEditTitle(active) {
		if (active) {
			return(
				<div className = "header--title__edit">
					<input
						defaultValue = {this.props.title}
						onChange = {this._handleTitleChange}
						placeholder = "Enter canvas title"
						type = "text"
					/>
					<label 
						className = "fa fa-check" 
						onClick = {this.props.actions.closeTitle}
					/>
				</div>
			);
		}

		return(
			<div 
				className = "header--title__edit"
				onClick={this.props.actions.editTitle} 
			>
				<h4>{this.props.title}</h4>
				<span className = "icon--edit fa fa-pencil-square-o" />
			</div>
		);
	}

	render() {
		let loggedButton = this._checkLogin(this.props.user);
		const title = this._shouldEditTitle(this.props.active);

		return (
			<header>
				<div className="header header--logo">
					<span className="fa fa-lg fa-camera"></span>
				</div>
				<div className="header header--title">
					<span className="icon fa fa-header"></span>
					{title}
				</div>
				<div className="header header--history">
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
		active: ['editTitle'],
		user: ['user']
	},
	actions: {
		openLogin: actions.openLoginPopup,
		saveTitle: actions.saveTitle,
		editTitle: actions.openTitle,
		closeTitle: actions.closeTitle
	}
});