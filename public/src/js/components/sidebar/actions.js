	

export function changeTool(tree, tool) {
	tree.set('selectedTool', tool);
}

export function resizeWorkspace(tree) {
	var currentTool = tree.get(['selectedTool']);
	const tools = tree.get(['tools']);
	const singleTools = ['cursor', 'eraser', 'picker', 'zoom', 'square'];

	if (singleTools.indexOf(currentTool) >= 0) {
		tree.set(['toolSettings', 'visible'], false);
	} else {
		tree.set(['toolSettings', 'visible'], true);
	}

}

export function changeColor(tree, color) {
	tree.set('color', color);
}