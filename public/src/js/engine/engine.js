import tree from '../state';
import fabricjs from '../../../../bower_components/fabric.js/dist/fabric.min.js';
import {pencil} from './draw';

export let canvas = null;
export function engineInit(){
	canvas = new fabricjs.fabric.Canvas('mainCanvas', {
		backgroundColor: 'rgb(255,255,255)',
		selection: false,
		width: window.innerWidth * 0.6,
		height: window.innerHeight * 0.6,
	});

	fabric.Object.prototype.selectable = false;
};

const updateTool = () => {
	const currentState = tree.get();
	console.log(currentState);
	switch (currentState.selectedTool) {
		case 'pencil':
			pencil(currentState);
			break;
		case 'brush':
			console.log('brush');
			break;
		case 'text':
			console.log('text');
			break;
		default:
			console.log('default');
	}
};

tree.on('update', () => {
	updateTool();
});
