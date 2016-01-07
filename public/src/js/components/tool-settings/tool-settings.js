/**
 *
 * Tool Settings Component
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../base-component/base-component';
import {branch} from 'baobab-react/higher-order';

import FontSettings from './components/font-settings/font-settings';
import PencilSettings from './components/pencil-settings/pencil-settings';
import BucketSettings from './components/bucket-settings/bucket-settings';
import BrushSettings from './components/brush-settings/brush-settings';

import {closeToolSettings} from './actions';

const displayName = 'Sidebar';

class ToolSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this.state = {
			wrapperClass: ''
		};

		this._bind('_closeSettings');
	}

	componentWillReceiveProps(newProps) {
		if (newProps.toolSettings.visible) {
			this.setState({wrapperClass: 'toolbar-advanced-settings animated fadeInLeft'});
		} else {
			if (this.state.wrapperClass !== ''){
				this.setState({wrapperClass: 'toolbar-advanced-settings animated fadeOutLeft'});
			}
		}
	}

	_getToolSettings(selectedTool) {
		switch (selectedTool) {
			case 'bucket':
				return(<BucketSettings />);
				break;
				
			case 'text':
				return (<FontSettings />);
				break;

			case 'pencil':
				return (<PencilSettings />);
				break;

			case 'brush':
				return (<BrushSettings />);
				break;

			default: 
				return false;
		}
	}

	_closeSettings() {
		this.setState({wrapperClass: 'toolbar-advanced-settings animated fadeOutLeft'});
		this.props.actions.closeTool();
	}

	render() {
		const props = this.props.toolSettings;
		const toolElement = this._getToolSettings(this.props.selectedTool);

		return (
			<div>
				<div className={this.state.wrapperClass}>
					{props.visible && toolElement}
				</div>
				{
					props.visible && 
					<div 
						className = "toolbar-shadow"
						onClick = {this._closeSettings}
					/>
				}
			</div>
		);
	}

}

export default branch(ToolSettings, {
	cursors: {
		selectedTool: ['selectedTool'],
		toolSettings: ['toolSettings']
	},
	actions: {
		closeTool: closeToolSettings
	}
});