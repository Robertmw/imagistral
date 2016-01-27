/**
 *
 * Picture Component
 * @parent Wall
 * @author Robert P.
 *
 */

import React from 'react';
import Classnames from 'classnames';

import BaseComponent from '../../../../components/base-component/base-component';

class Picture extends BaseComponent {

	constructor(props) {
		super(props);

		this._bind('_onClick');
	}

	_onClick(e) {
		console.log(e.target);
	}

	render() {
		return (
			<div 
				className = "picture col-xs-12 col-sm-6 col-md-4 col-lg-3"
			>	
				<div 
					className = "picture__featured"
					style = {{backgroundImage: "url(" + this.props.picture + ")"}}
				/>
				<div className = "picture__meta row middle-xs">
					<div className = "col-xs-10 col-sm-10 col-md-10 col-lg-10">
						<h5 className = "picture__meta__title">{this.props.title}</h5>
						<small className = "picture__meta__date">{this.props.author}</small>
					</div>
					<div className = "col-xs-1 col-sm-1 col-md-1 col-lg-1">
						<span className = "picture__meta__icon icon-hearth_linear" />
					</div>
					<div 
						className = "col-xs-1 col-sm-1 col-md-1 col-lg-1"
						onClick = {this._onClick}
					>
						<span className = "picture__meta__icon icon-magnifier" />
					</div>
				</div>
			</div>
		);
	}

}

Picture.displayName = "Picture Element";

Picture.propsType = {
	author: React.PropTypes.string.isRequired,
	date: React.PropTypes.string,
	handleCick: React.PropTypes.func.isRequired,
	likes: React.PropTypes.number,
	picture: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
};

Picture.defaultProps = {
	author: 'Unknown',
	date: 'Undated',
	handleCick: null,
	likes: 0,
	picture: '',
	title: 'Untitled'
};

export default Picture;