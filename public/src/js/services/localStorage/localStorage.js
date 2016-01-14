let instance = null;

class LocalStorage {

	constructor () {}

	get(name) {
		let response = localStorage.getItem(name);
		return JSON.parse(response);
	}

	set(name, object) {
		localStorage.setItem(name, JSON.stringify(object));
	}

	delete(name) {
		localStorage.removeItem(name);
	}

}

if (!instance) {
	instance = new LocalStorage;
}

export default instance;

