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

export function getBlob(rawBlob) {
	let byteString = null;
	let mimestring = null;

	canvas.deactivateAll().renderAll();
	const dataURI = canvas.toDataURL('png');

	if(dataURI.split(',')[0].indexOf('base64') !== -1 ) {
		byteString = atob(dataURI.split(',')[1]);
	} else {
		byteString = decodeURI(dataURI.split(',')[1]);
	}

	mimestring = dataURI.split(',')[0].split(':')[1].split(';')[0];

	const content = new Array();
	for (let i = 0; i < byteString.length; i++) {
		content[i] = byteString.charCodeAt(i);
	}
	const rawContent = new Uint8Array(content);

	const returnBlob = new Blob([rawContent], {type: mimestring});
	const urlCreator = window.URL || window.webkitURL;

	let imageUrl = null;
	if (rawBlob) {
		imageUrl = {returnBlob, mimestring};
	} else {
		imageUrl = urlCreator.createObjectURL(returnBlob);
	}

	return imageUrl;
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
