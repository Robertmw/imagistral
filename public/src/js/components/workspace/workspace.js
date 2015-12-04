var React = require('react'),
		ReactDOM = require('react-dom'),
		BaseComponent = require('../base-component/base-component');

const displayName = 'Workspace';

class Workspace extends BaseComponent {

	constructor (props) {
		super(props);
	}

	render() {
		return (
			<section className="workspace">
				<section className="workspace-settings-bar">
					<div className="toggle-settings">
						<span className="fa fa-angle-double-right"></span>
					</div>
					<div className="zoom-settings">
						<span className="fa fa-minus"></span>
						<span className="fa fa-lg fa-search"></span>
						<span className="fa fa-plus"></span>
						<div className="custom-select">
							<label className="current-zoom">
								100%
								<span className="fa fa-caret-down"></span>
							</label>
						</div>
					</div>
					<div className="canvas-settings">
						<span className="fa fa-rotate-left"></span>
						<span className="fa fa-rotate-right"></span>
					</div>
					<div className="delete">
						<span className="fa fa-trash"></span>
					</div>
				</section>
				<canvas className="canvas-sheet"></canvas>
				<div className="scrollbar horizontal"><span className="cursor"></span></div>
				<div className="scrollbar vertical"><span className="cursor"></span></div>
			</section>
		);
	}

}

Workspace.propTypes = {
};

Workspace.defaultProps = {};

module.exports = Workspace;

