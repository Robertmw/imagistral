import tree from '../state';
import fabricjs from '../../../../bower_components/fabric.js/dist/fabric.min.js';
import {pencil} from './draw';

export let canvas = null;

function engineInit(w, h){
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
	//console.log(currentState);
	switch (currentState.selectedTool) {
		case 'pencil':
			pencil(currentState);
			break;
		case 'brush':
			//console.log('brush');
			break;
		case 'text':
			//console.log('text');
			break;
		default:
			//console.log('default');
	}
};

tree.on('update', (e) => {
	let eventData = e.data;

	if (eventData.previousData.canvas.width === null &
		eventData.previousData.canvas.height === null) {
		engineInit(eventData.currentData.canvas.width, eventData.currentData.canvas.height);

	}
	
	updateTool();

});
