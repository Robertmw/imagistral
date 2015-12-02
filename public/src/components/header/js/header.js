var React = require('react'),
    ReactDOM = require('react-dom');
var BaseComponent = require('../../base-component/js/base-component');

const displayName = 'Header';

class Header extends BaseComponent {

  constructor (props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}
  componentWillMount() {}

  render() {
    return (
      <header>
        <div class="logo">
          <span class="fa fa-lg fa-camera"></span>
        </div>
        <div class="work-title">
          <span class="fa fa-header"></span>
          <h4>Floating bird</h4>
        </div>
        <div class="work-history">
          <span class="fa fa-lg fa-reply unavailable"></span>
          <span class="fa fa-lg fa-share"></span>
        </div>
        <div class="work-buttons">
          <div class="work--download">
            <span class="fa fa-lg fa-cloud-download"></span>
          </div>
          <div class="work--upload">
            <p>Import</p>
          </div>
          <div class="work--publish">
            <p>Publish</p>
          </div>
          <div class="work--help">
            <span class="fa fa-lg fa-question-circle"></span>
          </div>
          <div class="work--wall">
            <span class="fa fa-lg fa-th"></span>
          </div>
          <div class="work--profile">
            <img class="avatar" src="https://scontent-frt3-1.xx.fbcdn.net/hprofile-xap1/v/t1.0-1/p160x160/10383895_1080798488614634_3712605849066710036_n.jpg?oh=6c8c8762e3dfbcbaedf66cd61a674628&oe=56F7C1C8"></img>
          </div>
        </div>
      </header>
    );
  }

}

