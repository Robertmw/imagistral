/**
 *
 * Sidebar Component
 * @parent Sidebar
 * @author Robert P.
 *
 */

import React from 'react';
import BaseComponent from '../../../base-component/base-component';
import SubToolElement from '../subTool-element/subTool-element';

const displayName = 'ToolElement';

export default class ToolElement extends BaseComponent {

  constructor (props) {
    super(props);

    this._bind('_handleClick');
  }

  _handleClick() {
    this.props.handleClick(this.props.tool.name);
  }

  render() {
    let elClassName = this.props.selected ? 'toolbar-element selected' : 'toolbar-element';
    return (
      <div 
        className = {elClassName} 
        key = {this.props.key}
        onClick = {this._handleClick}
      >
        <span className = {this.props.tool.icon}></span>
        {this.props.tool.caret !== '' && <span className = {this.props.tool.caret}></span>}
        {this.props.tool.subTools.length !== 0 && <SubToolElement subTool = {this.props.tool.subTools} selected = {this.props.selected}/>}
      </div>
    );
  }

}

ToolElement.propTypes = {
  tool: React.PropTypes.object.isRequired,
  handleClick: React.PropTypes.func.isRequired
};

