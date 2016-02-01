import React, {Component} from 'react';
import {render} from 'react-dom';
import {root} from 'baobab-react/higher-order';
import tree from './state';

import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import ToolSettings from '../../components/tool-settings/tool-settings';
import Workspace from '../../components/workspace/workspace';
import Popups from '../../components/popups/popups';
import Notifications from '../../components/notifications/notifications';

import Cookie from '../../services/cookies';

const Cookies = new Cookie();

class Editor extends Component {

	componentWillMount() {
		let avatar = Cookies.getCookie('avatar');
		let first_name = Cookies.getCookie('first_name');
		let last_name = Cookies.getCookie('last_name');

		if (avatar !== null) {
			tree.set(['user', 'avatar'], avatar);
			tree.set(['user', 'first_name'], first_name);
			tree.set(['user', 'last_name'], last_name);
		}
	}

	render() {
		return(
			<section className="container">
				<Header />
				<Sidebar />
				<ToolSettings />
				<Workspace />
				<Popups />
				<Notifications />
			</section>
		);
	}

}

Editor.displayName = "Editor Name";

const EditorApp = root(Editor, tree);

export default EditorApp;