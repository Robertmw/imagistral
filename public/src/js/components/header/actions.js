import LocalStorage from '../../services/localStorage/localStorage';
import {addNotif} from '../notifications/actions';
import * as engine from '../../engine/engine';

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
    blob: engine.getBlob(),
    timestamp: Date.now()
  };

  if (pushToImages(newElement, _images)) {
    response.content = 'Image was published';
    response.type = 'success';
  } else {
    response.content = 'Image already exists';
    response.type = 'alert';
  }

  addNotif(tree,response);

  return response;
  
}

function pushToImages(element, images) {
  let response = true;
  if (images.length > 0) {
    for (let index = 0; index < images.length; index++) {
      if (images[index].title === element.title) {
        response = false;
      }
    };
  }

  if (response) {
    images.push(element);
    LocalStorage.set('imagesDB', images);
  }

  return response;
}