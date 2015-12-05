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

    this._bind('_handleClick');
  }

  _handleClick(newTool) {
    this.props.actions.changeTool(newTool);
    this.props.actions.resizeWorkspace();
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
    selected: ['selectedTool']
  },
  actions: {
    changeTool: actions.changeTool,
    resizeWorkspace: actions.resizeWorkspace
  }
});

