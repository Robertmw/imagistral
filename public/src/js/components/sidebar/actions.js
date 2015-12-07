export function changeTool(tree, tool) {
	tree.set('selectedTool', tool);
}

export function resizeWorkspace(tree) {
	var currentTool = tree.get(['selectedTool']);
	const tools = tree.get(['tools']);
	const singleTools = ['cursor', 'eraser', 'picker', 'zoom'];

	if (singleTools.indexOf(currentTool) >= 0) {
		tree.set(['workspace', 'small'], false);
		tree.set(['toolSettings', 'visible'], false);
	} else {
		tree.set(['workspace', 'small'], true);
		tree.set(['toolSettings', 'visible'], true);
	}

}

export function changeColor(tree, color) {
	tree.set('color', color);
}