export function createCanvas(tree, w, h) {
	tree.set(['canvas', 'width'], w);
	tree.set(['canvas', 'height'], h);

	//Closing popup
	tree.set(['popups', 'active'], '');
}