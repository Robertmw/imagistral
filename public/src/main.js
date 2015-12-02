var React = require('react'),
    ReactDOM = require('react-dom'),
    Header = require('./components/header/js/header');


ReactDOM.render(
  <section className="container">
    <Header/>
  </section>,
  document.getElementsByTagName('body')
);