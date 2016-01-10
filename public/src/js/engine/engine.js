import tree from '../state';
import fabricjs from '../../../../bower_components/fabric.js/dist/fabric.min.js';
import * as draw from './draw';
import * as importImage from './importImage';

export let canvas = null;
let workspace = null;

export function engineInit(w, h) {

	const canvasElem = document.createElement('canvas');
	workspace = document.getElementsByClassName('workspace')[0];
	canvasElem.setAttribute('id', 'mainCanvas');
	workspace.appendChild(canvasElem);

	canvas = new fabricjs.fabric.Canvas('mainCanvas', {
		backgroundColor: 'rgb(255,255,255)',
		selection: false,
		width: w,
		height: h,
		selectionColor: 'rgba(0,255,0,0.3)',
		selectionBorderColor: 'red',
		selectionLineWidth: 5
	});

	tree.set(['canvas', 'width'], w);
	tree.set(['canvas', 'height'], h);
};

export function deleteEngine() {
	const canvasContainer = document.getElementsByClassName('canvas-container')[0];
	workspace.removeChild(canvasContainer);

	tree.set(['canvas', 'width'], null);
	tree.set(['canvas', 'height'], null);
};

const updateTool = () => {
	const currentState = tree.get();
	console.log(currentState);
	switch (currentState.selectedTool) {
		case 'pencil':
			draw.pencil(currentState);
			break;
		case 'eraser':
			draw.deleteLayer();
			break;
		default:
			if (canvas !== null) {
				canvas.isDrawingMode = false;
			}
			break;
	}
};

tree.on('update', () => {
	updateTool();
});

const uploadedCursor = tree.select('uploadedImage');
uploadedCursor.on('update', () => {
	const imageUrl = tree.get().uploadedImage;
	if (imageUrl !== null) {
		importImage.addImage(imageUrl);
	}
});
