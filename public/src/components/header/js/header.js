var React = require('react'),
    ReactDOM = require('react-dom'),
    BaseComponent = require('../../base-component/js/base-component');

const displayName = 'Header';

class Header extends BaseComponent {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="logo">
          <span className="fa fa-lg fa-camera"></span>
        </div>
        <div className="work-title">
          <span className={this.props.buttons.canvasTitle.icon}></span>
          <h4>{this.props.buttons.canvasTitle.title}</h4>
        </div>
        <div className="work-history">
          <span className={this.props.buttons.history[0].icon}></span>
          <span className={this.props.buttons.history[1].icon}></span>
        </div>
        <div className="work-buttons">
          <div className="work--download">
            <span className="fa fa-lg fa-cloud-download"></span>
          </div>
          <div className="work--upload">
            <p>Import</p>
          </div>
          <div className="work--publish">
            <p>Publish</p>
          </div>
          <div className="work--help">
            <span className="fa fa-lg fa-question-circle"></span>
          </div>
          <div className="work--wall">
            <span className="fa fa-lg fa-th"></span>
          </div>
          <div className="work--profile">
            <img className="avatar" src={this.props.user.avatar}></img>
          </div>
        </div>
      </header>
    );
  }

}

Header.propTypes = {
  buttons: React.PropTypes.object,
  user: React.PropTypes.object
};

Header.defaultProps = {};

module.exports = Header;

