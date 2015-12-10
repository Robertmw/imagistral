export function openLoginPopup(tree) {
	tree.set(['popups', 'active'], 'login');
}

export function openTitle(tree) {
	tree.set(['editTitle'], true);
}

export function saveTitle(tree, value) {
	tree.set(['canvasTitle'], value);
}

export function closeTitle(tree) {
	tree.set(['editTitle'], false);
}

