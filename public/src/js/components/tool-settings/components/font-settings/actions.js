function objToArray(obj) {
	let arr = [];
	Object.keys(obj).map(key => {
		arr.push(obj[key]);
	});
	return arr;
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
/*	const state = tree.get(['toolSettings', 'text']);
	let fontStyle = objToArray(state.fontStyle);
	let index = fontStyle.indexOf(value);

	if (index > -1) {
		fontStyle.splice(index, 1);
	} else {
		fontStyle.push(value);
	}*/

	tree.set(['toolSettings', 'text', 'fontStyle'], value);
}

