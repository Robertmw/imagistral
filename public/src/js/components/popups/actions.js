import {addNotif} from '../notifications/actions';

export function closePopup(tree) {
	tree.set(['popups', 'active'], '');
}

export function authUser(tree, data) {
	let notif = {
		content:  'Welcome back!',
		type: 'info'
	};

	addNotif(tree,notif);

	tree.set(['user'], data);
}

export function createCanvas(tree, w, h) {
	tree.set(['canvas', 'width'], w);
	tree.set(['canvas', 'height'], h);

	//Closing popup
	tree.set(['popups', 'active'], '');
}

export function uploadImage(tree, value) {
	let notif = {
		content:  'Images was uploaded!',
		type: 'success'
	};

	addNotif(tree,notif);

	tree.set('uploadedImage', value);
}