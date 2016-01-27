import tree from '../pages/editor/state';
import {canvas} from './engine';

export function pencil(state) {
	canvas.isDrawingMode = true;
	canvas.freeDrawingBrush.color = state.color;
	canvas.freeDrawingBrush.width = state.toolSettings.pencil.size;
};

export function clear() {
	if (canvas !== null) {
		canvas.isDrawingMode = false;
		canvas.clear();
	}
};

export function deleteLayer() {
	if (canvas.getActiveObject() !== null) {
		canvas.getActiveObject().remove();
		tree.set('selectedTool', 'cursor');
	}
}
