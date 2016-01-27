/**
 *
 * Filters Settings Component
 * @parent ToolSettings
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import * as actions from '../../actions';

class FiltersSettings extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_changeFilter');
	}


	_changeFilter(event) {
		this.props.actions.changeFilter(event.target.value);
	}

	render() {
		const props = this.props;

		const filterTypes = ['Greyscale', 'Invert', 'Sepia', 'Color Overlay'];
		const renderFilters = filterTypes.map((el, index) => {
			return (
				<div
					className="radioBtn"
					key={el}
				>
					<input
						checked = {props.filter === el}
						name="filter"
						onChange = {this._changeFilter}
						type="radio"
						value={el}
					/>
					<label>
						<span className="radio--placeholder"></span>
						{el}
					</label>
				</div>
			);
		});

		return (
			<aside>
				<p className="settingsTitle">Filters settings</p>
				<section className="setting">
					<h3>Filter type</h3>
					<div className="setting--wrapper">
						{renderFilters}
					</div>
				</section>
			</aside>
		);
	}

}

FiltersSettings.displayName = 'Filters Settings';

export default branch(FiltersSettings, {
	cursors: {
		filter: ['toolSettings', 'filter']
	},
	actions: {
		changeFilter: actions.changeFilter
	}
});
