
export function zoomIn(tree) {
	let zoomValue =  tree.get(['workspace', 'zoom']);

	tree.set(['workspace', 'zoomIn'], true);
	if (zoomValue <= 200) {
		zoomValue += 50;
		tree.set(['workspace', 'zoom'], zoomValue);
	} 

	if (zoomValue === 250) {
		tree.set(['workspace', 'zoomIn'], false);
	}

	if (zoomValue > 50) {
		tree.set(['workspace', 'zoomOut'], true);
	}

	let sheet = document.querySelector( 'canvas' );

}

export function zoomOut(tree) {
	let zoomValue =  tree.get(['workspace', 'zoom']);

	tree.set(['workspace', 'zoomOut'], true);
	if (zoomValue >= 100) {
		zoomValue -= 50;
		tree.set(['workspace', 'zoom'], zoomValue);
	} 

	if (zoomValue === 50) {
		tree.set(['workspace', 'zoomOut'], false);
	}

	if (zoomValue < 250) {
		tree.set(['workspace', 'zoomIn'], true);
	}

}