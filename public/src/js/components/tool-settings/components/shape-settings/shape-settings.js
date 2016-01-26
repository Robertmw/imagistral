/**
 *
 * Font Settings Component
 * @parent ToolSettings
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import * as actions from '../../actions';

class ShapeSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_changeShape');
	}


	_changeShape(event) {
		this.props.actions.changeShape(event.target.value);
	}

	render() {
		const props = this.props;

		const shapeTypes = ['Square', 'Cirle'];
		const renderShapes = shapeTypes.map((el, index) => {
			return (
				<div 
					className="font--family--element" 
					key={el}
				>
					<input
						checked = {props.shape === el}
						name="shape"
						onChange = {this._changeShape}
						type="radio"
						value={el}
					/>
					<label>
						<span className="radio--placeholder"></span>
						{el};
					</label>
				</div>
			);
		});

		return (
			<aside>
				<p className="settings-title">Shapes settings</p>
				<section className="font--family">
					<h3>Shape type</h3>
					<div className="font--family--wrapper">
						{renderShapes}
					</div>
				</section>
			</aside>
		);
	}

}

ShapeSettings.displayName = 'Shape Settings';

export default branch(ShapeSettings, {
	cursors: {
		shape: ['toolSettings', 'shape']
	},
	actions: {
		changeShape: actions.changeShape
	}
});