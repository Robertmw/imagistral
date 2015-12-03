var React = require('react'),
    ReactDOM = require('react-dom'),
    HeaderEl = require('./components/header/js/header');

ReactDOM.render(
  <section className="container">
    <HeaderEl />
  </section>,
  document.querySelector('#app')
);