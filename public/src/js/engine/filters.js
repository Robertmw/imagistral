import {canvas} from './engine';

export function applyFilter(state) {
	let currentObj = canvas.getActiveObject();

	if (currentObj === null) {
		currentObj = canvas;
	}
	console.log('filter', state, currentObj);

	switch (state.toolSettings.filter) {
		case 'None':
			console.log('none');
			break;
		case 'Greyscale':
			console.log('grey');
			break;
		case 'Invert':
			console.log('inv');
			break;
		case 'Sepia':
			console.log('sep');
			break;
		default:

	}
};
