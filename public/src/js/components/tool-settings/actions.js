export function closeToolSettings(tree) {
	tree.set(['toolSettings', 'visible'], false);
}

export function updateColor(tree, value) {
	tree.set(['color'], value);
}

export function changeFontSize(tree, value) {	
	tree.set(['toolSettings', 'text', 'fontSize'], value);
}

export function changeTextAlign(tree, value) {	
	tree.set(['toolSettings', 'text', 'textAlign'], value);
}

export function changeFontFamily(tree, value) {	
	tree.set(['toolSettings', 'text', 'fontFamily'], value);
}

export function changeFontWeight(tree, value) {	
	tree.set(['toolSettings', 'text', 'fontWeight'], value);
}

export function changeFontStyle(tree, value) {	
	tree.set(['toolSettings', 'text', 'fontStyle'], value);
}

export function changePencilSize(tree, value) {
	tree.set(['toolSettings', 'pencil', 'size'], value);
}