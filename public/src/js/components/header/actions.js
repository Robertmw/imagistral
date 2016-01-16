import LocalStorage from '../../services/localStorage/localStorage';

export function openLoginPopup(tree) {
	tree.set(['popups', 'active'], 'login');
}

export function openTitle(tree) {
	tree.set(['editTitle'], true);
}

export function saveTitle(tree, value) {
	tree.set(['canvasTitle'], value);
}

export function closeTitle(tree) {
	tree.set(['editTitle'], false);
}

export function openFilePopup(tree) {
	tree.set(['popups', 'active'], 'openFile');
}

export function saveToLS(tree, payload) {
  let response = {};
  let _images = LocalStorage.get('imagesDB') || [];
  let newElement = {
    id: _images.length + 1,
    title: payload.title,
    owner: payload.username,
    like: 0,
    timestamp: Date.now()
  };

  if (pushToImages(newElement, _images)) {
    response.value = true;
    response.title = 'Image was published';
  } else {
    response.value = false;
    response.title = 'Name already exists';
  }

  return response;
  
}

function pushToImages(element, images) {
  let response = true;
  if (images.length > 0) {
    for (let index = 0; index < images.length; index++) {
      if (images[index].title === element.title) {
        response = false;
      } else {
        images.push(element);
        LocalStorage.set('imagesDB', images);
      }
    };
  } else {
    images.push(element);
    LocalStorage.set('imagesDB', images);
  }

  return response;
}