/**
 *
 * Login popup
 * @parent Popups
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import {branch} from 'baobab-react/higher-order';

class LoginPopup extends BaseComponent {

	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="popup bounceIn animated">
				<div className="popup__header">
					<h3 className="popup__title">Login with</h3>
					<span 
						className="popup__close icon-cross" 
						onClick={this.props.handleClose}
					/>
				</div>
				<div className="popup__wrapper popup__wrapper--inline">
					<div className="btn btn--wide btn--facebook">
						<label className="icon-facebook_square" />
						<span className="btn__title">Facebook</span>
					</div>
					<div className="btn btn--wide btn--google">
						<label className="icon-google_square" />
						<span className="btn__title">Google Plus</span>
					</div>
				</div>
				<div className="popup__footer">
					<p className="popup__sidenote">* Don't worry we won't use your info, yet!</p>
				</div>
			</div>
		);
	}

}

export default LoginPopup;