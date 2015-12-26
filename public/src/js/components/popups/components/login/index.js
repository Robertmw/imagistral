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

import Auth from '../../../../services/facebook-auth';
import Cookie from '../../../../services/cookies';

import * as actions from '../../actions';

class LoginPopup extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_authenticate', '_login');

		let authConfig = {
			appId: '999809560057190',
			xfbml: false,
			version: 'v2.3',
			callback: this._login
		};
		this.FbAuth = new Auth(authConfig);

		this.Cookies = new Cookie();
	}

	_authenticate() {
		this.FbAuth.authenticate(this._login);
	}

	_login(payload) {
		this.props.actions.authUser(payload);
		this.props.handleClose();
		this.Cookies.createCookie('avatar', payload.avatar, 100, 'Imagistral');
		this.Cookies.createCookie('first_name', payload.first_name, 100, 'Imagistral');
		this.Cookies.createCookie('last_name', payload.last_name, 100, 'Imagistral');
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
					<div 
						className="btn btn--wide btn--facebook"
						onClick= {this._authenticate}
					>
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

export default branch(LoginPopup, {
	actions: {
		authUser: actions.authUser
	}
});