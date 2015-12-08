/**
 *
 * Header Component
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../base-component/base-component';
import {branch} from 'baobab-react/higher-order';

const displayName = 'Header';

class Header extends BaseComponent {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<header>
				<div className="logo">
					<span className="fa fa-lg fa-camera"></span>
				</div>
				<div className="work-title">
					<span className="fa fa-header"></span>
					<h4>{this.props.title}</h4>
				</div>
				<div className="work-history">
					<span className="fa fa-lg fa-reply unavailable"></span>
					<span className="fa fa-lg fa-share"></span>
				</div>
				<div className="work-buttons">
					<div className="work--download">
						<span className="fa fa-lg fa-cloud-download"></span>
					</div>
					<div className="work--upload">
						<p>Import</p>
					</div>
					<div className="work--publish">
						<p>Publish</p>
					</div>
					<div className="work--help">
						<span className="fa fa-lg fa-question-circle"></span>
					</div>
					<div className="work--wall">
						<span className="fa fa-lg fa-th"></span>
					</div>
					<div className="work--profile">
						<img
							className="avatar"
							src={this.props.user.avatar}
						/>
					</div>
				</div>
			</header>
		);
	}

}

export default branch(Header, {
	cursors: {
		title: ['canvasTitle'],
		user: ['user']
	}
});