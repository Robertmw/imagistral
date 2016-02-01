export function addNotif(tree, payload) {
	let notifications = tree.select(['notifications']);
	notifications.push(payload);

	setTimeout(() => {popNotif(tree);}, 1000);
}

function popNotif(tree) {
	let notifications = tree.select(['notifications']);
	notifications.splice([0,1]);
}