/**
 *
 * Pencil Settings Component
 * @parent ToolSettings
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import * as actions from '../../actions';

const displayName = 'Brush Settings';

class BrushSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_changeBrushHardness', '_changeBrushSize');
	}

	_changeBrushSize(event) {
		this.props.actions.changeBrushSize(event.target.value);
	}

	_changeBrushHardness(event) {
		this.props.actions.changeBrushHardness(event.target.value);
	}

	render() {
		const props = this.props.settings;

		return (
			<aside>
				<p className="settings-title">Brush settings</p>
				<section className="font--size">
					<h3>Brush size</h3>
					<input 
						onChange = {this._changeBrushSize} 
						type="text" 
						value={props.size}
					/>
					<label>px</label>
				</section>
				<section className="font--size">
					<h3>Brush hardness</h3>
					<input 
						onChange = {this._changeBrushHardness} 
						type="text" 
						value={props.hardness}
					/>
					<label>px</label>
				</section>
			</aside>
		);
	}

}

export default branch(BrushSettings, {
	cursors: {
		settings: ['toolSettings', 'brush']
	},
	actions: {
		changeBrushSize: actions.changeBrushSize,
		changeBrushHardness: actions.changeBrushHardness
	}
});