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

		this._bind('_changeFontSize', '_changeFontStyle', '_changeFontFamily', '_changeTextAlign');
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
						id={btn.name}
						className={css}
						onClick = {this._changeFontStyle}
					></span>
				</li>
			);
		});

		const fontFamilies = ['Arial', 'Open Sans', 'Graffiti'];
		const renderFonts = fontFamilies.map((el, index) => {
			return (
				<div className="font--family--element" key={el}>
					<input
						checked = {props.fontFamily === el}
						name="fontFamily"
						onChange = {this._changeFontFamily}
						type="radio"
						value={el}
					/>
					<label>
						<span className="radio--placeholder"></span>
						{el}
					</label>
				</div>
			)
		});

		const fontAligns = ['left', 'center', 'right'];
		const renderAligns = fontAligns.map((el, index) => {
			let css = (props.textAlign.indexOf(el) > -1) ? 'align--option active' : 'align--option';
			return (
				<p 
					className = {css}
					id = {el}
					key = {index}
					onClick = {this._changeTextAlign}
				>{el}</p>
			);
		});

		return (
			<aside>
				<p className="settings-title">Text settings</p>
				<section className="font--size">
					<h3>Font size</h3>
					<input type="text" onChange = {this._changeFontSize} value={props.fontSize} />
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
		changeTextAlign: actions.changeTextAlign
	}
});