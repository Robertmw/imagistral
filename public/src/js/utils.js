
export function isEmpty(obj) {
	const hasOwnProperty = Object.prototype.hasOwnProperty;
	let key;

	if (obj === null || obj.length === 0) {
		return true;
	}
	if (obj.length > 0) {
		return false;
	}
	for (key in obj) {
		if (hasOwnProperty.call(obj, key)) {
			return false;
		}
	}

	return true;
}