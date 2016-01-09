/**
 *
 * Open File popup
 * @parent Popups
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import Dropzone from 'react-dropzone';
import {branch} from 'baobab-react/higher-order';

import {engineInit} from '../../../../engine/engine';
import {uploadImage, closePopup} from '../../actions';

class OpenFile extends BaseComponent {

	constructor(props) {
		super(props);
		this._bind('_onDrop', '_uploadFile');

		this.state = {
			image: null
		};
	}

	_onDrop(files) {
		console.info('Received files: ', files[0]);
		this.setState({image: files[0].preview});
	}

	_uploadFile() {
		console.log(this.state);
		if (this.state.image !== null) {
			this.props.actions.uploadImage(this.state.image);
			engineInit(1,1);
			this.props.actions.closePopup();
		}
	}

	render() {
		const activeStyle = {
			borderColor: '#fff',
			backgroundColor: '#1D2024'
		};
		const rejectStyle = {
			borderColor: '#fff',
			backgroundColor: '#D90429',
			color: '#fff'
		};

		const previewClass = this.state.image ? 'dropzone__preview open' : 'dropzone__preview';
		return (
			<div className="popup bounceIn animated">
				<div className="popup__header">
					<h3 className="popup__title">Import File</h3>
					<span 
						className="popup__close icon-cross" 
						onClick={this.props.handleClose}
					/>
				</div>
				<div className="popup__wrapper">
					<Dropzone 
						accept = "image/*"
						activeStyle = {activeStyle}
						className = "dropzone__container"
						multiple = {false}
						onDrop = {this._onDrop}
						rejectStyle = {rejectStyle}
					>
						<div className="dropzone__wrapper">
							<p className="dropzone__title">Try dropping some files here, or click to select files to upload.</p>
							<span 
								className = {previewClass} 
								style = {{backgroundImage: 'url(' + this.state.image + ')'}} 
							/>
						</div>
					</Dropzone>
				</div>
				<div className="popup__footer">
					<span
						className="btn"
						onClick={this._uploadFile}
					>Create</span>
				</div>
			</div>
		);
	}

}

export default branch(OpenFile, {
	actions: {
		uploadImage: uploadImage,
		closePopup: closePopup
	}
});