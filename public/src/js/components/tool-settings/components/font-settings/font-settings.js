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

const displayName = 'Font Settings';

class FontSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_changeFontSize', '_changeFontStyle', '_changeFontFamily', '_changeTextAlign', '_changeFontWeight');
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

	_changeTextAlign(event) {
		this.props.actions.changeTextAlign(event.target.id);
	}

	_changeFontWeight(event) {
		this.props.actions.changeFontWeight(event.target.value);
	}


	render() {
		const props = this.props.settings;

		const styleButtons = [
			{
				name: 'italic',
				class: 'icon-italic'
			},
			{
				name: 'bold',
				class: 'icon-bold'
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
				<div 
					className="font--family--element" 
					key={el}
				>
					<input
						checked = {props.fontFamily === el}
						name="fontFamily"
						onChange = {this._changeFontFamily}
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

		const fontWeights = ['thin', 'normal', 'bold'];
		const renderWeights = fontWeights.map((el, index) => {
			return (
				<option
					key = {index}
					selected = {props.fontWeight === el ? true : false}
					value = {el}
				>{el}</option>
			);
		});

		const fontAligns = ['left', 'center', 'right'];
		const renderAligns = fontAligns.map((el, index) => {
			let css = (props.textAlign.indexOf(el) > -1) ? 'align--option active' : 'align--option';
			return (
				<span 
					className = {css}
					id = {el}
					key = {index}
					onClick = {this._changeTextAlign}
				>{el}</span>
			);
		});

		return (
			<aside>
				<p className="settings-title">Text settings</p>
				<section className="font--size">
					<h3>Font size</h3>
					<input 
						onChange = {this._changeFontSize} 
						type="text" 
						value={props.fontSize}
					/>
					<label>px</label>
				</section>
				<section className="font--family">
					<h3>Font family</h3>
					<div className="font--family--wrapper">
						{renderFonts}
					</div>
				</section>
				<section className="font--style">
					<h3>Font style</h3>
					<ul className="fonts--list">
						{renderButtons}
					</ul>
				</section>
				<section className="font--weight">
					<h3>Font weight</h3>
					<div className="weight--container">
						<select 
							className="weight--wrapper" 
							onChange={this._changeFontWeight}
						>
							{renderWeights}
						</select>
					</div>
				</section>
				<section className="font--align">
					<h3>Text align</h3>
					<div className="align--wrapper">
						{renderAligns}
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
		changeFontFamily: actions.changeFontFamily,
		changeTextAlign: actions.changeTextAlign,
		changeFontWeight: actions.changeFontWeight
	}
});