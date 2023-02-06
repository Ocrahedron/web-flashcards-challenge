require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const renderTemplate = (reactElement, properties, response) => {
  const reactEl = React.createElement(reactElement, properties);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  response.write('<!DOCTYPE html>');
  response.write(html);
  response.end();
};

module.exports = renderTemplate;

// const renderTemplate = require('./lib/renderTemplate');   --- указывает в ручке
// renderTemplate(Main, null, res);
