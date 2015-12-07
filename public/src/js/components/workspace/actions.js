/**
 * SIZE FUNCTIONS
 */
 export function changeSize(tree) {
 	let state = tree.get(['workspace', 'hideSettings']);
 	tree.set(['workspace', 'hideSettings'], !state);
 }

/**
 * ZOOM FUNCTIONS
 */

 export function zoomIn(tree) {
 	let zoom =  tree.get(['workspace', 'zoom']);

 	tree.set(['workspace', 'zoomIn'], true);
 	if (zoom <= 200) {
 		zoom += 50;
 		tree.set(['workspace', 'zoom'], zoom);
 	} 

 	if (zoom === 250) {
 		tree.set(['workspace', 'zoomIn'], false);
 	}

 	if (zoom > 50) {
 		tree.set(['workspace', 'zoomOut'], true);
 	}

 }

 export function zoomOut(tree) {
 	let zoom =  tree.get(['workspace', 'zoom']);

 	tree.set(['workspace', 'zoomOut'], true);
 	if (zoom >= 100) {
 		zoom -= 50;
 		tree.set(['workspace', 'zoom'], zoom);
 	} 

 	if (zoom === 50) {
 		tree.set(['workspace', 'zoomOut'], false);
 	}

 	if (zoom < 250) {
 		tree.set(['workspace', 'zoomIn'], true);
 	}
 }