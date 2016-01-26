import fabricjs from '../../../../bower_components/fabric.js/dist/fabric.min.js';
import {canvas} from './engine';

export function applyFilter(state) {
	let currentObj = canvas.getActiveObject();
	const f = fabricjs.fabric.Image.filters;
	console.log(f);
	//
	// if (currentObj === null) {
	// 	currentObj = canvas;
	// }
	// console.log('filter', state, currentObj);

	switch (state.toolSettings.filter) {
		case 'None':
			console.log('none');
			console.log('co', currentObj);
			currentObj.filters.length = 0;
			break;
		case 'Greyscale':
			currentObj.filters.push(new f.Grayscale());
			console.log('grey');
			break;
		case 'Invert':
			currentObj.filters.push(new f.Invert());
			console.log('inv');
			break;
		case 'Sepia':
			currentObj.filters.push(new f.Sepia());
			console.log('sep');
			break;
		default:

	}

	currentObj.applyFilters(canvas.renderAll.bind(canvas));
};
