import React, {Component} from 'react';
import {render} from 'react-dom';

import BaseComponent from '../../components/base-component/base-component';
import Picture from './components/picture/picture';

import LocalStorage from '../../services/localStorage/localStorage';

class Wall extends BaseComponent {

	constructor(props) {
		super(props);

		this.state = {
			images: []
		};

		this._bind('fetchImages');
	}

	componentWillMount() {
		this.fetchImages();
	}

	fetchImages() {
		let _images = LocalStorage.get('imagesDB');
		console.log(_images);
		this.setState({images: _images});
	}

	render() {
		const imagesContainer = this.state.images.map((img, index) => {
			return (
				<Picture 
					author = "Robert"
					date = {img.timestamp}
					handleClick = {null}
					key = {index}
					likes = {img.like}
					picture = {img.blob}
					title = {img.title}
				/>
			);
		});
		return (
			<section className = "row wall__container">
				{imagesContainer}
			</section>
		);
	}

}

Wall.displayName = "Wall Name";

export default Wall;