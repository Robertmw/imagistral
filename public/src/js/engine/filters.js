import fabricjs from '../../../../bower_components/fabric.js/dist/fabric.min.js';
import {canvas} from './engine';

const applyFilter = (obj, filter) => {
	const f = fabricjs.fabric.Image.filters;
	switch (filter) {
		case 'None':
			break;
		case 'Greyscale':
			obj.filters.push(new f.Grayscale());
			break;
		case 'Invert':
			obj.filters.push(new f.Invert());
			break;
		case 'Sepia':
			obj.filters.push(new f.Sepia2());
			break;
		default:
	}
	obj.applyFilters(canvas.renderAll.bind(canvas));
};

export function apply(state) {
	let currentObj = canvas.getActiveObject();
	if (currentObj === null) {
		console.log('to', typeof currentObj);
		canvas.deactivateAll();
		const rasterizeImage = canvas.toDataURL('png');

		fabric.Image.fromURL(rasterizeImage, function(img) {
			console.log('co', img);
			applyFilter(img, state.toolSettings.filter);
			canvas.clear();
			canvas.add(img);
		});
	} else {
		applyFilter(currentObj, state.toolSettings.filter);
	}
};
