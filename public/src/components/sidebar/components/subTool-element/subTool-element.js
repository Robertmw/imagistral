var React = require('react'),
    ReactDOM = require('react-dom'),
    BaseComponent = require('../../../base-component/base-component');

const displayName = 'SubToolElement';

class SubToolElement extends BaseComponent {

  constructor (props) {
    super(props);
  }

  render() {
    let elClassName = this.props.selected ? 'sandbox open' : 'sandbox';
    let sandbox = this.props.subTool.map((subTool, index) => {
      return (
        <li key={index}>
          <p><span className = {subTool.icon}></span> {subTool.label}</p>
        </li>
        );
    });

    return (
        <div className={elClassName}>
          <ul>
            {sandbox}
          </ul>
        </div>
    );
  }

}

SubToolElement.propTypes = {
  subTool: React.PropTypes.array.isRequired
};

SubToolElement.defaultProps = {};

module.exports = SubToolElement;

