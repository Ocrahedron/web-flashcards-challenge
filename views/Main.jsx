const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-wrap">
          <div id="1" className="g-col-6 g-col-md-4 mb-3">Карточка 1</div>
          <div id="2" className="g-col-6 g-col-md-4 mb-3">Карточка 2</div>
          <div id="3" className="g-col-6 g-col-md-4 mb-3">Карточка 3</div>
          <div id="4" className="g-col-6 g-col-md-4 mb-3">Карточка 4</div>
          <div id="5" className="g-col-6 g-col-md-4 mb-3">Карточка 5</div>
        </div>
      </div>
    </Layout>
  );
};
