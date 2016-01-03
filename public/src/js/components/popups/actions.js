export function closePopup(tree) {
	tree.set(['popups', 'active'], '');
}

export function authUser(tree, data) {
	tree.set(['user'], data);
}

export function createCanvas(tree, w, h) {
	tree.set(['canvas', 'width'], w);
	tree.set(['canvas', 'height'], h);

	//Closing popup
	tree.set(['popups', 'active'], '');
}

export function uploadImage(tree, value) {
	tree.set('uploadedImage', value);
}