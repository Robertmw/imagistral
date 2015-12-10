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
import * as actions from './actions';

const displayName = 'Workspace';

class Workspace extends BaseComponent {

	constructor (props) {
		super(props);

		this._bind('zoomIn', 'zoomOut', '_shouldRenderCanvas');
	}

	zoomIn() {
		this.props.actions.zoomIn();
	}

	zoomOut() {
		this.props.actions.zoomOut();
	}

	_shouldRenderCanvas(props) {
		if (props.width === 0 && props.height === 0) {
			return (
				<div className="canvas__intro">
					<span className="fa fa--big fa-smile-o" />
					<div 
						className="canvas__intro__title"
						onClick = {this.props.actions.openNewcanvasPopup}
					>
						<span>Create a </span>
						<div className = "canvas__intro__btn">
							<span className="fa fa-file-o" />
							<span>  new canvas</span>
						</div>
					</div>
				</div>
			);
		}

		return (
			<canvas 
				className="canvas-sheet"
				id="mainCanvas" 
			/>
		);
	}

	render() {
		const workspace = this.props.workspace;

		const zoomInClass = workspace.zoomIn ? "fa fa-plus" : "fa fa-plus unavailable";
		const zoomOutClass = workspace.zoomOut ? "fa fa-minus" : "fa fa-minus unavailable";

		const canvasOrNot = this._shouldRenderCanvas(this.props.canvas);

		return (
			<section className="workspace">
				<section className="settingsBar">
					<div 
						className="settingsEl settingsEl--newFile"
						onClick = {this.props.actions.openNewcanvasPopup}
					>
						<span className="fa fa-file-o" />
						<p>New canvas</p>
					</div>
					<div className="settingsEl settingsEl--newFile">
						<span className="fa fa-trash" />
						<p>Delete canvas</p>
					</div>
					<div className="settingsEl settingsEl--newFile">
						<span className="fa fa-rotate-left" />
						<p>Rotate left</p>
					</div>
					<div className="settingsEl settingsEl--newFile">
						<span className="fa fa-rotate-right" />
						<p>Rotate right</p>
					</div>
					<div className="settingsEl settingsEl--zoom">
						<span 
							className={zoomOutClass} 
							onClick={this.zoomOut}
						></span>
						<span className="fa fa-lg fa-search"></span>
						<span 
							className={zoomInClass} 
							onClick={this.zoomIn}
						></span>
						<div className="custom-select">
							<label className="current-zoom">
								{workspace.zoom + '%'}
								<span className="fa fa-caret-down"></span>
							</label>
						</div>
					</div>
				</section>
				{canvasOrNot}
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
		openNewcanvasPopup: actions.openNewcanvasPopup
	}
});

