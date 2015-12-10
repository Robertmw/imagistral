/**
 *
 * New canvas popup
 * @parent Popups
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import {branch} from 'baobab-react/higher-order';

class NewCanvasPopup extends BaseComponent {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="popup bounceIn animated">
				<div className="popup__header">
					<h3 className="popup__title">Create new canvas</h3>
					<span 
						className="popup__close fa fa-lg fa-times" 
						onClick={this.props.handleClose}
					/>
				</div>
				<div className="popup__wrapper">
					<div className="size-settings">
						<h4 className="size-settings__title">Predefined size</h4>
						<div className="size-settings__wrapper">
							<select className="select--custom">
								<option 
									selected
									value="" 
								>
									Select option
								</option>
								<option value="cover">Facebook cover</option>
							</select>
						</div>
					</div>
					<div className="size-settings">
						<h4 className="size-settings__title">Custom size</h4>
						<div className="size-settings__wrapper">
							<input 
								placeholder="Width"
								type="number" 
							/>
							<input 
								placeholder="Height"
								type="number" 
							/>
						</div>
					</div>
				</div>
				<div className="popup__footer">
					<span className="btn">Create</span>
				</div>
			</div>
		);
	}

}

export default NewCanvasPopup;