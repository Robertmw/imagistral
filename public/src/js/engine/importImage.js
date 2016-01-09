import fabricjs from '../../../../bower_components/fabric.js/dist/fabric.min.js';
import * as engine from './engine';

export function addImage(url){
	if (engine.canvas !== null) {
		fabricjs.fabric.Image.fromURL(url, (myImage) => {
			engine.canvas.add(myImage).setActiveObject(myImage);
			engine.canvas.getActiveObject().selectable = true;
		});
	} else {
		// TODO wait until issue #52 its resolved
		fabricjs.fabric.Image.fromURL(url, (myImage) => {
			engine.engineInit(myImage.width, myImage.height);
			engine.canvas.add(myImage);
		});
	}
}
