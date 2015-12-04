var React = require('react'),
    ReactDOM = require('react-dom'),
    BaseComponent = require('../../../../base-component/js/base-component'),
    SubToolElement = require('../../subTool-element/js/subTool-element');

const displayName = 'ToolElement';

class ToolElement extends BaseComponent {

  constructor (props) {
    super(props);
    this._bind('_handleClick');
  }

  _handleClick() {
    this.props.handleClick(this.props.tool);
  }

  render() {
    let elClassName = this.props.selected ? 'toolbar-element selected' : 'toolbar-element';

    return (
      <div className = {elClassName} onClick = {this._handleClick}>
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

ToolElement.defaultProps = {};

module.exports = ToolElement;

