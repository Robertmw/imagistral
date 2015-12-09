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
import * as actions from './actions';

const displayName = 'Pencil Settings';

class PencilSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_changePencilSize');
	}

	_changePencilSize(event) {
		this.props.actions.changePencilSize(event.target.value);
	}

	render() {
		const props = this.props.settings;

		return (
			<aside>
				<p className="settings-title">Pencil settings</p>
				<section className="font--size">
					<h3>Pencil size</h3>
					<input 
						onChange = {this._changePencilSize} 
						type="text" 
						value={props.size}
					/>
					<label>px</label>
				</section>
			</aside>
		);
	}

}

export default branch(PencilSettings, {
	cursors: {
		settings: ['toolSettings', 'pencil']
	},
	actions: {
		changePencilSize: actions.changePencilSize,
	}
});