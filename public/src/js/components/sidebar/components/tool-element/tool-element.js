/**
 *
 * Tool Element Component
 * @parent Sidebar
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import Classnames from 'classnames';


const displayName = 'ToolElement';

class ToolElement extends BaseComponent {

	constructor (props) {
		super(props);

		this._bind('_handleClick', '_canvasRendered');
	}

	_handleClick() {
		this.props.handleClick(this.props.tool.name);
	}

	_canvasRendered() {
		return this.props.canvas.width === null && this.props.canvas.height === null;
	}

	render() {
		let elClassName = Classnames({
			'element': true,
			'element--selected': this.props.selected && !this._canvasRendered(),
			'element--unavailable': this._canvasRendered()
		});
		
		return (
			<div 
				className = {elClassName} 
				key = {this.props.key}
				onClick = {this._handleClick}
			>
				<span className = {this.props.tool.icon}></span>
			</div>
		);
	}

}

ToolElement.propTypes = {
	handleClick: React.PropTypes.func.isRequired,
	selected: React.PropTypes.bool,
	tool: React.PropTypes.object.isRequired
};

export default branch(ToolElement, {
	cursors: {
		canvas: ['canvas']
	}
});