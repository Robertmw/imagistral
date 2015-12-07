/**
 *
 * Sidebar Component
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../base-component/base-component';
import {branch} from 'baobab-react/higher-order';
import * as actions from './actions';

import ToolElement from './components/tool-element/tool-element';

const displayName = 'Sidebar';

class Sidebar extends BaseComponent {

  constructor (props) {
    super(props);

    this._bind('_handleClick', '_handleChange');
  }

  _handleClick(newTool) {
    this.props.actions.changeTool(newTool);
    this.props.actions.resizeWorkspace();
  }

  _handleChange(event) {
    this.props.actions.changeColor(event.target.value);
  }

  render() {
    const tools = this.props.tools;
    const toolsWrapper = tools.map((tool, index) => {
      let selected = tool.name === this.props.selected ? true : false;
      return (
          <ToolElement 
            key = {index}
            tool = {tool}
            selected = {selected}
            handleClick = {this._handleClick}
          />
      );
    });

    return (
      <aside className="sidebar">
          {toolsWrapper}
          <input type="color" className = "colorPicker" onChange = {this._handleChange} value={this.props.color} />
      </aside>
    );
  }

}

Sidebar.propTypes = {
  tools: React.PropTypes.array.isRequired
};

Sidebar.defaultProps = {};

export default branch(Sidebar, {
  cursors: {
    tools: ['tools'],
    selected: ['selectedTool'],
    color: ['color']
  },
  actions: {
    changeTool: actions.changeTool,
    resizeWorkspace: actions.resizeWorkspace,
    changeColor: actions.changeColor
  }
});

