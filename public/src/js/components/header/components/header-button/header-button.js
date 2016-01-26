/**
 *
 * Header Button Component
 * @parent none
 * @author Robert P.
 *
 */

import React from 'react';
import { Link } from 'react-router';
import BaseComponent from '../../../base-component/base-component';
import Classnames from 'classnames';

class HeaderButton extends BaseComponent {

  constructor (props) {
    super(props);

    this._bind('_onclick');
  }

  _onclick() {
    if (this.props.handleClick) {
      this.props.handleClick();
    }
  }

  render() {
    let headerBtnClass = Classnames({
      'btn--header': true,
      'btn--inactive': this.props.elementClass === 'inactive'
    });

    return (
      <div 
        className = {headerBtnClass}
        onClick = {this._onclick}
      >
        {
          !this.props.linkTo && this.props.icon && 
          <span className = {this.props.icon} />
        }
        {
          this.props.content && 
          <p>{this.props.content}</p>
        }
        {
          this.props.linkTo && this.props.icon &&
          <Link to = {this.props.linkTo}>
            <span className = {this.props.icon} />
          </Link>
        }
      </div>
    );
  }

}

HeaderButton.displayName = "Header Button";

HeaderButton.propsType = {
  content: React.PropTypes.string,
  elementClass: React.PropTypes.string,
  handleClick: React.PropTypes.func,
  linkTo: React.PropTypes.string,
  icon: React.PropTypes.string
};

HeaderButton.defaultProps = {
  content: '',
  elementClass: '',
  handleClick: null,
  linkTo: '',
  icon: ''
};

export default HeaderButton;