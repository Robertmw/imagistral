/**
 *
 * New canvas popup
 * @parent Popups
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import * as actions from './actions';
import {engineInit} from '../../../../engine/engine';

class NewCanvasPopup extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_setCanvasSize', '_updateSize', '_createCanvas');

		this.state = {
			w: this.props.canvas.width,
			h: this.props.canvas.height
		};
	}

	_setCanvasSize (e) {
		if (e.target.value && e.target.value === 'cover') {
			this.setState({w: 851});
			this.setState({h: 315});
		}
	}

	_updateSize(e) {
		if (e.target.name === 'width') {
			this.setState({w: e.target.value});
		}

		if (e.target.name === 'height') {
			this.setState({h: e.target.value});
		}
	}

	_createCanvas() {
		this.props.actions.createCanvas(this.state.w, this.state.h);
		engineInit(this.state.w, this.state.h);
	}

	render() {
		return (
			<div className="popup bounceIn animated">
				<div className="popup__header">
					<h3 className="popup__title">Create new canvas</h3>
					<span
						className="popup__close icon-cross"
						onClick={this.props.handleClose}
					/>
				</div>
				<div className="popup__wrapper">
					<div className="size-settings">
						<h4 className="size-settings__title">Predefined size</h4>
						<div className="size-settings__wrapper">
							<select
								className="select--custom"
								onChange={this._setCanvasSize}
							>
								<option
									defaultValue
									value=""
								>
									Select option
								</option>
								<option value="cover"> Facebook cover</option>
							</select>
						</div>
					</div>
					<div className="size-settings">
						<h4 className="size-settings__title">Custom size</h4>
						<div className="size-settings__wrapper">
							<input
								name = "width"
								onChange = {this._updateSize}
								placeholder = "Width"
								type = "number"
								value = {this.state.w}
							/>
							<input
								name = "height"
								onChange = {this._updateSize}
								placeholder = "Height"
								type = "number"
								value = {this.state.h}
							/>
						</div>
					</div>
				</div>
				<div className="popup__footer">
					<span
						className="btn"
						onClick={this._createCanvas}
					>Create</span>
				</div>
			</div>
		);
	}

}

export default branch(NewCanvasPopup, {
	cursors : {
		canvas: 'canvas'
	},
	actions: {
		createCanvas: actions.createCanvas
	}
});
