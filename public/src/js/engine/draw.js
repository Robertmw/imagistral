import tree from '../state';
import {canvas} from './engine';

export function pencil(state){
	canvas.isDrawingMode = true;
	canvas.freeDrawingBrush.color = state.color;
	canvas.freeDrawingBrush.width = state.toolSettings.pencil.size;
};