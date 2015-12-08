/**
 *
 * Base Component
 * @parent none
 * @author Robert P.
 *
 */

var React = require('react');

module.exports = class BaseComponent extends React.Component {
	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}
};