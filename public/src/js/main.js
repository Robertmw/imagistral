import React, {Component} from 'react';
import {render} from 'react-dom';
import {root} from 'baobab-react/higher-order';
import tree from './state';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import ToolSettings from './components/tool-settings/tool-settings';
import Workspace from './components/workspace/workspace';

import Popups from './components/popups/popups';


import {engineInit} from './engine/engine';

class App extends Component {

	render() {
		return(
			<section className="container">
				<Header />
				<Sidebar />
				<ToolSettings />
				<Workspace />
				<Popups />
			</section>
		);
	}

}

App.prototype.displayName = "App Name";

const RootedApp = root(App, tree);

render(<RootedApp />, document.querySelector('#app'));

//engineInit();
