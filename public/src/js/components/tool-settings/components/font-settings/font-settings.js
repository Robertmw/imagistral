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
import * as actions from './actions';

const displayName = 'Font Settings';

class FontSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_changeFontSize', '_changeFontStyle', '_changeFontFamily');
	}

	_changeFontSize(event) {
		this.props.actions.changeFontSize(event.target.value);
	}

	_changeFontStyle(event) {
		this.props.actions.changeFontStyle(event.target.id);
	}

	_changeFontFamily(event) {
		this.props.actions.changeFontFamily(event.target.value);
	}

	render() {
		const props = this.props.settings;
		const styleButtons = [
			{
				name: 'italic',
				class: 'fa fa-lg fa-italic'
			},
			{
				name: 'bold',
				class: 'fa fa-lg fa-bold'
			},
			{
				name: 'underline',
				class: 'fa fa-lg fa-underline'
			}
		];
		const renderButtons = styleButtons.map((btn, index) => {
			let css = (props.fontStyle.indexOf(btn.name) > -1) ? btn.class + ' active' : btn.class;
			return (
				<li key = {btn.name}>
					<span 
						className={css}
						id={btn.name}
						onClick = {this._changeFontStyle}
					></span>
				</li>
			);
		});

		const fontFamilies = ['Arial', 'Open Sans', 'Graffiti'];
		const renderFonts = fontFamilies.map((el, index) => {
			return (
				<div className="font-family--element" key={el}>
					<input
						type="radio"
						name="fontFamily"
						value={el}
						checked = {props.fontFamily === el}
						onChange = {this._changeFontFamily}
					/>
					<label>
						<span className="radio--placeholder"></span>
						{el}
					</label>
				</div>
			)
		})

		return (
			<aside>
				<p className="settings-title">Text settings</p>
				<section className="font-settings">
					<span>Font size</span>
					<input type="text" onChange = {this._changeFontSize} value={props.fontSize} />
					<label>px</label>
				</section>
				<section className="font-family">
					<span>Font family</span>
					<div className="font-family--wrapper">
						{renderFonts}
					</div>
				</section>
				<section className="font-style">
					<span>Font style</span>
					<ul className="font-styling">
						{renderButtons}
					</ul>
				</section>
				<section className="font-settings">
					<span>Text align</span>
					<div className="custom-select">
						<label className="current-value">
							{props.textAlign}
							<span className="fa fa-caret-down"></span>
						</label>
					</div>
				</section>
			</aside>
		);
	}

}

export default branch(FontSettings, {
	cursors: {
		settings: ['toolSettings', 'text']
	},
	actions: {
		changeFontSize: actions.changeFontSize,
		changeFontStyle: actions.changeFontStyle,
		changeFontFamily: actions.changeFontFamily
	}
});