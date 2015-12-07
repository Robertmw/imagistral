const fabric = require('../../../../bower_components/fabric.js/dist/fabric.min.js').fabric;
let canvas = null;

const init = () => {
	canvas = new fabric.Canvas('mainCanvas', {
		backgroundColor: 'rgb(255,255,255)',
		isDrawingMode: true,
		width: window.innerWidth * 0.6,
		height: window.innerHeight * 0.6,
	});

	fabric.Object.prototype.selectable = false;
};

module.exports = {
	init: init,
	canvas: canvas
};
