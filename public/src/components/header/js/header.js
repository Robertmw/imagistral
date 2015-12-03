var React = require('react'),
    ReactDOM = require('react-dom'),
    BaseComponent = require('../../base-component/js/base-component');

const displayName = 'Header';

class HeaderEl extends BaseComponent {

  render() {
    return (
      <header>
        <div className="logo">
          <span className="fa fa-lg fa-camera"></span>
        </div>
        <div className="work-title">
          <span className="fa fa-header"></span>
          <h4>Floating bird</h4>
        </div>
        <div className="work-history">
          <span className="fa fa-lg fa-reply unavailable"></span>
          <span className="fa fa-lg fa-share"></span>
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
            <img className="avatar" src="https://scontent-frt3-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p160x160/10383895_1080798488614634_3712605849066710036_n.jpg?oh=6c8c8762e3dfbcbaedf66cd61a674628&oe=56F7C1C8"></img>
          </div>
        </div>
      </header>
    );
  }

}

module.exports = HeaderEl;

