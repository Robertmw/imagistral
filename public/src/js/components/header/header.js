/**
 *
 * Header Component
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import { Link } from 'react-router';
import {branch} from 'baobab-react/higher-order';
import Classnames from 'classnames';

import * as actions from './actions';
import * as engine from '../../engine/engine';

import BaseComponent from '../base-component/base-component';
import HeaderButton from './components/header-button/header-button';

import {isEmpty, canvasExists} from '../../utils.js';

const displayName = 'Header';

class Header extends BaseComponent {

	constructor (props) {
		super(props);

		this._bind('_handlePublishClick', '_handleTitleChange', '_saveLocal');
	}

	_handlePublishClick() {
		let request = {
			title: this.props.title,
			username: this.props.user.first_name + this.props.user.first_name 
		};

		if (canvasExists(this.props.canvas.width, this.props.canvas.height)) {
			let response = this.props.actions.saveToLS(request);
			console.info(response.title);
		}
	}

	_saveLocal() {
		const extension = engine.getBlob(true).mimestring.split('/');
		saveAs(engine.getBlob(true).returnBlob, this.props.title + "." + extension[1]);
	}
		
	_handleTitleChange(e) {
		this.props.actions.saveTitle(e.target.value);
	}

	render() {
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
					{
						this.props.active &&
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
					}
					{
						!this.props.active &&
						<div
							className = "header--title__edit"
							onClick={this.props.actions.editTitle}
						>
							<h4>{this.props.title}</h4>
							<span className = "icon--edit icon-edit" />
						</div>
					}
				</div>

				{
					isEmpty(this.props.user) &&
					<div className="work-buttons">
						<HeaderButton
								content = "Login"
								handleClick = {this.props.actions.openLogin}
						/>

					</div>
				}
				{
					!isEmpty(this.props.user) && 
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
								handleClick = {this._handlePublishClick}
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
				}
					
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
