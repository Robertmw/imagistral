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
import Classnames from 'classnames';
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
						<span className="icon-download"></span>
					</div>
					<div 
						className="work--upload"
						onClick = {this.props.actions.openFile}
					>
						<p>Import</p>
					</div>
					<div className="work--publish">
						<p>Publish</p>
					</div>
					<div className="work--help">
						<span className="icon-faq"></span>
					</div>
					<div className="work--wall">
						<span className="icon-wall_v2"></span>
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
						className = "icon-checked" 
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
				<span className = "icon--edit icon-edit" />
			</div>
		);
	}

	render() {
		const title = this._shouldEditTitle(this.props.active);
		let loggedButton = this._checkLogin(this.props.user);
		let overlayClass = Classnames({
			'header header--overlay': true,
			'active': this.props.active
		});
		

		return (
			<header>
				<div className="header header--logo">
					<span className="icon-camera"></span>
				</div>
				<div className="header header--title">
					<span className="icon icon-heading"></span>
					{title}
				</div>
				{loggedButton}
				<div 
					className = {overlayClass}
					onClick = {this.props.actions.closeTitle}
				/>
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
		openFile: actions.openFilePopup,
		saveTitle: actions.saveTitle,
		editTitle: actions.openTitle,
		closeTitle: actions.closeTitle
	}
});