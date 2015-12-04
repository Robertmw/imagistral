var React = require('react'),
    ReactDOM = require('react-dom'),
    BaseComponent = require('../../base-component/js/base-component'),
    ToolElement = require('../components/tool-element/js/tool-element');

const displayName = 'Sidebar';

class Sidebar extends BaseComponent {

  constructor (props) {
    super(props);

    this.state = {
      selected: ''
    }

    this._bind('_changeSelectedTool');
  }

  _changeSelectedTool (element) {
    this.setState({selected: element.name});
  }

  render() {
    let tools = this.props.tools;
    let toolsWrapper = tools.map((tool, index) => {
      let selected = tool.name === this.state.selected ? true : false;
      return (
          <ToolElement 
            key = {tool.id}
            handleClick = {this._changeSelectedTool}
            tool = {tool}
            selected = {selected}
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

module.exports = Sidebar;

