/**
 *
 * Login popup
 * @parent Popups
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';

class LoginPopup extends BaseComponent {

	constructor(props) {
		super(props);
	}

	render() {
		const props = this.props.login;

		return (
			<div className="popup bounceIn animated">
				<div className="popup__header">
					<h3 className="popup__title">Login with</h3>
					<span 
						className="popup__close fa fa-lg fa-times" 
						onClick={this.props.handleCloseClick}
					/>
				</div>
				<div className="popup__wrapper popup__wrapper--inline">
					<div className="btn btn--wide btn--facebook">
						<label className="fa fa-lg fa-facebook-official" />
						<span className="btn__title">Facebook</span>
					</div>
					<div className="btn btn--wide btn--google">
						<label className="fa fa-lg fa-google-plus" />
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