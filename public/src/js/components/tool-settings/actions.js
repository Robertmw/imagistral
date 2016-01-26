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

export function changeBrushSize(tree, value) {
	tree.set(['toolSettings', 'brush', 'size'], value);
}

export function changeBrushHardness(tree, value) {
	tree.set(['toolSettings', 'brush', 'hardness'], value);
}

export function changeShape(tree, value) {
	tree.set(['toolSettings', 'shape'], value);
}

export function changeFilter(tree, value) {
	tree.set(['toolSettings', 'filter'], value);
}