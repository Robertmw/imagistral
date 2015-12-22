import tree from '../state';
import fabricjs from '../../../../bower_components/fabric.js/dist/fabric.min.js';
import * as draw from './draw';

export let canvas = null;

export function engineInit(w, h) {
	canvas = new fabricjs.fabric.Canvas('mainCanvas', {
		backgroundColor: 'rgb(255,255,255)',
		selection: false,
		width: w,
		height: h
	});
	fabric.Object.prototype.selectable = false;
};

const updateTool = () => {
	const currentState = tree.get();
	console.log(currentState);
	switch (currentState.selectedTool) {
		case 'pencil':
			draw.pencil(currentState);
			break;
		case 'eraser':
			draw.clear();
			break;
		default:
			if (canvas !== null) {
				canvas.isDrawingMode = false;
			}
			break;
	}
};

tree.on('update', (e) => {
	updateTool();
});
