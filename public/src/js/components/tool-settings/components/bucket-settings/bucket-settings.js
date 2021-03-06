/**
 *
 * Bucket Settings Component
 * @parent ToolSettings
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import ColorPicker from 'react-color';
import * as actions from '../../actions';


const displayName = 'Bucket Settings';

class BucketSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_handleChange');

	}

	_handleChange(color) {
		let color2 = '#' + color.hex;
		this.props.actions.updateColor(color2);
	}

	render() {
		const props = this.props;

		return (
			<aside>
				<p className="settingsTitle">Bucket settings</p>
				<div className="settings settings--short">
					<ColorPicker
						color = {props.color}
						onChange = {this._handleChange}
						type="chrome"
					/>
				</div>
			</aside>
		);
	}

}

export default branch(BucketSettings, {
	cursors: {
		color: ['color']
	},
	actions: {
		updateColor: actions.updateColor
	}
});