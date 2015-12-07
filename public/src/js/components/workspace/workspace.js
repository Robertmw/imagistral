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

import zoom from '../../zoom';

const displayName = 'Workspace';

class Workspace extends BaseComponent {

	constructor (props) {
		super(props);

		this._bind('zoomIn', 'zoomOut', '_zoomEvent');
	}

	zoomIn() {
		this.props.actions.zoomIn();
	}

	zoomOut() {
		this.props.actions.zoomOut();
	}


	_getclickPosition(e) {
		var x, y;
		if (e.pageX || e.pageY) { 
			x = e.pageX;
			y = e.pageY;
		} else { 
			x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
			y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
		} 

		return {
			x: x,
			y: y
		};
	}

	_zoomEvent(e) {
		var position = this._getclickPosition(e);

		zoom.to({
			x: position.x,
			y: position.y,
			scale: this.props.workspace.zoom / 100
		});
	}


	render() {
		const workspace = this.props.workspace;

		const zoomInClass = workspace.zoomIn ? "fa fa-plus" : "fa fa-plus unavailable";
		const zoomOutClass = workspace.zoomOut ? "fa fa-minus" : "fa fa-minus unavailable";

		return (
			<section className="workspace">
				<section className="workspace-settings-bar">
					<div className="zoom-settings">
						<span className={zoomOutClass} onClick={this.zoomOut}></span>
						<span className="fa fa-lg fa-search"></span>
						<span className={zoomInClass} onClick={this.zoomIn}></span>
						<div className="custom-select">
							<label className="current-zoom">
								{workspace.zoom + '%'}
								<span className="fa fa-caret-down"></span>
							</label>
						</div>
					</div>
					<div className="canvas-settings">
						<span className="fa fa-rotate-left"></span>
						<span className="fa fa-rotate-right"></span>
					</div>
					<div className="delete">
						<span className="fa fa-trash"></span>
					</div>
				</section>
				<canvas className="canvas-sheet" onClick={this._zoomEvent}></canvas>
				<div className="scrollbar horizontal"><span className="cursor"></span></div>
				<div className="scrollbar vertical"><span className="cursor"></span></div>
			</section>
		);
	}

}

export default branch(Workspace, {
	cursors: {
		workspace: ['workspace']
	},
	actions: {
		zoomIn: actions.zoomIn,
		zoomOut: actions.zoomOut
	}
});

