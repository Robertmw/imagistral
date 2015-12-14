/**
 *
 * Workspace Component
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import Classnames from 'classnames';
import * as actions from './actions';

const displayName = 'Workspace';

class Workspace extends BaseComponent {

	constructor (props) {
		super(props);

		this._bind('zoomIn', 'zoomOut', '_shouldRenderCanvas', '_openCanvasPopup');
	}

	zoomIn() {
		this.props.actions.zoomIn();
	}

	zoomOut() {
		this.props.actions.zoomOut();
	}

	_shouldRenderCanvas(props) {
		if (props.width === null && props.height === null) {
			return (
				<div className="canvas__intro">
					<span className="icon-smiley big" />
					<div className="canvas__intro__title">
						<span>Create a </span>
						<div 
							className = "canvas__intro__btn"
							onClick = {this.props.actions.openNewcanvasPopup}
						>
							<span className="icon-file" />
							<span>  new canvas</span>
						</div>
					</div>
				</div>
			);
		}
	}

	_openCanvasPopup(e) {
		if (this.props.canvas.width === null && this.props.canvas.height === null) {
			this.props.actions.openNewcanvasPopup();
		}
	}

	render() {
		const workspace = this.props.workspace;
		const canvas = this.props.canvas;

		const canvasClass = Classnames({
			'canvas--sheet': true,
			'active': canvas.width !== null && canvas.height !== null
		});
		const createClass = Classnames({
			'settingsEl': true,
			'settingsEl--unavailable': canvas.width !== null && canvas.height !== null
		});
		const deleteClass = Classnames({
			'settingsEl': true,
			'settingsEl--unavailable': canvas.width === null && canvas.height === null
		});
		const zoomInClass = Classnames({
			'icon-plus': true,
			'unavailable': !workspace.zoomIn
		});
		const zoomOutClass = Classnames({
			'icon-minus': true,
			'unavailable': !workspace.zoomOut
		});

		const canvasOrNot = this._shouldRenderCanvas(canvas);

		return (
			<section className="workspace">
				<section className="settingsBar">
					<div 
						className = {createClass}
						onClick = {this._openCanvasPopup}
					>
						<span className="icon-file" />
						<p>New canvas</p>
					</div>
					<div 
						className = {deleteClass}
						onClick = {this.props.actions.deleteCanvas}
					>
						<span className="icon-trash" />
						<p>Delete canvas</p>
					</div>
					<div className = {deleteClass}>
						<span className="icon-rotate_left" />
						<p>Rotate left</p>
					</div>
					<div className = {deleteClass}>
						<span className="icon-rotate_right" />
						<p>Rotate right</p>
					</div>
					<div className="settingsEl settingsEl--zoom">
						<span 
							className={zoomOutClass} 
							onClick={this.zoomOut}
						></span>
						<span className="icon-magnifier"></span>
						<span 
							className={zoomInClass} 
							onClick={this.zoomIn}
						></span>
						<div className="custom-select">
							<label className="current-zoom">
								{workspace.zoom + '%'}
							</label>
						</div>
					</div>
				</section>
				{canvasOrNot}
				<canvas 
					className = {canvasClass}
					id = "mainCanvas" 
				/>
				<div className="scrollbar scrollbar--horizontal"><span className="cursor"></span></div>
				<div className="scrollbar scrollbar--vertical"><span className="cursor"></span></div>
			</section>
		);
	}

}

export default branch(Workspace, {
	cursors: {
		workspace: ['workspace'],
		canvas: ['canvas']
	},
	actions: {
		zoomIn: actions.zoomIn,
		zoomOut: actions.zoomOut,
		openNewcanvasPopup: actions.openNewcanvasPopup,
		deleteCanvas: actions.deleteCanvas
	}
});

