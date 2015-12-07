/**
 *
 * Sidebar Component
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../base-component/base-component';
import {branch} from 'baobab-react/higher-order';

import FontSettings from './components/font-settings/font-settings';

const displayName = 'Sidebar';

class ToolSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this.state = {
			wrapperClass: ''
		};
	}

	componentWillReceiveProps(newProps) {
		if (newProps.toolSettings.visible) {
			this.setState({wrapperClass: 'toolbar-advanced-settings animated fadeInLeft'});
		} else {
			this.setState({wrapperClass: 'toolbar-advanced-settings animated fadeOutLeft'});
		}
	}

	_getToolSettings(selectedTool) {
		switch (selectedTool) {
			case 'text':
				return (<FontSettings />);
				break;

			default: 
				return false;
		}
	}

	render() {
		const props = this.props.toolSettings;
		const toolElement = this._getToolSettings(this.props.selectedTool);

		return (
			<div className={this.state.wrapperClass}>
				{props.visible && toolElement}
			</div>
		);
	}

}

export default branch(ToolSettings, {
	cursors: {
		selectedTool: ['selectedTool'],
		toolSettings: ['toolSettings']
	}
});