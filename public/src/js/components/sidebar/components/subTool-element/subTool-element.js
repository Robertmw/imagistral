/**
 *
 * Sub Tool Component
 * @parent Sidebar
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';

const displayName = 'SubToolElement';

export default class SubToolElement extends BaseComponent {

	constructor (props) {
		super(props);
	}

	render() {
		let elClassName = this.props.selected ? 'sandbox open' : 'sandbox';
		let sandbox = this.props.subTool.map((subTool, index) => {
			return (
				<li key={index}>
					<p><span className = {subTool.icon}></span> {subTool.label}</p>
				</li>
				);
		});

		return (
				<div className={elClassName}>
					<ul>
						{sandbox}
					</ul>
				</div>
		);
	}

}

SubToolElement.propTypes = {
	selected: React.PropTypes.bool,
	subTool: React.PropTypes.array.isRequired
};


