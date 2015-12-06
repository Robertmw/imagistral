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

const displayName = 'Sidebar';

class ToolSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this.state = {
			wrapperClass: 'toolbar-advanced-settings'
		};
	}

	componentWillReceiveProps (newProps) {
		//if (newProps.toolSettings.visible != this.props.toolSettings.visible) {
			if (newProps.toolSettings.visible) {
				this.setState({wrapperClass: 'toolbar-advanced-settings animated fadeInLeft'});
			} else {
				this.setState({wrapperClass: 'toolbar-advanced-settings animated fadeOutLeft'});
			}
		//}
	}

	render() {
		const props = this.props.toolSettings;

		return (
			<div>
				{props.visible && 
					<aside className={this.state.wrapperClass}>
						<p className="settings-title">Text settings</p>
						<section className="color-settings">
							<span>Color</span>
							<span className="color-bucket"></span>
						</section>
						<section className="font-settings">
							<span>Font size</span>
							<input type="text" value="14" />
							<label>px</label>
						</section>
						<section className="font-settings">
							<span>Font weigth</span>
							<div className="custom-select">
								<label className="current-value">
									400
									<span className="fa fa-caret-down"></span>
								</label>
							</div>
						</section>
						<section className="font-style">
							<span>Font style</span>
							<ul className="font-styling">
								<li><span className="fa fa-lg fa-italic"></span></li>
								<li><span className="fa fa-lg fa-bold"></span></li>
								<li><span className="fa fa-lg fa-underline"></span></li>
							</ul>
						</section>
					</aside>
				}
			</div>
		);
	}

}

export default branch(ToolSettings, {
	cursors: {
		toolSettings: ['toolSettings']
	}
});