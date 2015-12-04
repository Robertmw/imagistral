import React, {Component} from 'react';
import {render} from 'react-dom';
import {root} from 'baobab-react/higher-order';
import tree from './state';

import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import Workspace from './components/workspace/workspace';

class App extends Component {

	render() {
		return(
			<section className="container">
				<Sidebar />
			</section>
		);
	}

}

const RootedApp = root(App, tree);

render(<RootedApp />, document.querySelector('#app'));
