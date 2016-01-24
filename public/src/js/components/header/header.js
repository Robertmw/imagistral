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
import * as engine from '../../engine/engine';

import HeaderButton from './components/header-button/header-button';

import {isEmpty} from '../../utils.js';

import { Link } from 'react-router';
const displayName = 'Header';

class Header extends BaseComponent {

	constructor (props) {
		super(props);

		this._bind('_publish', '_checkLogin', '_shouldEditTitle', '_handleTitleChange', '_saveLocal');
	}

	_publish() {
		let request = {
			title: this.props.title,
			username: 'Robert'
		};
		let response = this.props.actions.saveToLS(request);
		console.info(response.title);
	}

	_saveLocal() {
		const extension = engine.getBlob(true).mimestring.split('/');
		saveAs(engine.getBlob(true).returnBlob, this.props.title + "." + extension[1]);
	}

	_checkLogin(user) {
		let value;
		const buttons = Classnames({
			'work--publish': true,
			'work--publish--inactive': this.props.canvas.width === null && this.props.canvas.height === null
		});

		if (isEmpty(user)) {
			value = (
				<div className="work-buttons">
					<HeaderButton
							content = "Login"
							handleClick = {this.props.actions.openLogin}
					/>
				</div>
			);
		} else {
			value = (
				<div className="work-buttons">
					<HeaderButton
							icon = "icon-download"
							handleClick = {this._saveLocal}
					/>
					<HeaderButton
							content = "Import"
							handleClick = {this.props.actions.openFile}
					/>
					<HeaderButton
							content = "Publish"
							elementClass = {this.props.canvas.width === null ? 'inactive' : null}
							handleClick = {this._publish}
					/>
					<HeaderButton
							icon = "icon-faq"
					/>
					<HeaderButton
						icon = "icon-wall_v2"
						linkTo = "/wall"
					/>
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
		user: ['user'],
		canvas: ['canvas']
	},
	actions: {
		openLogin: actions.openLoginPopup,
		openFile: actions.openFilePopup,
		saveTitle: actions.saveTitle,
		editTitle: actions.openTitle,
		closeTitle: actions.closeTitle,
		saveToLS: actions.saveToLS
	}
});
