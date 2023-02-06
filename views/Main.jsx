const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
  return (
    <Layout>
      <div className="container">
        <div className="d-flex flex-wrap">

          <a href="/game/1">
            <div className="g-col-6 g-col-md-4 mb-3 deck">Карточка 1</div>
          </a>
          <a href="/game/2">
            <div id="2" className="g-col-6 g-col-md-4 mb-3 deck">Карточка 2</div>
          </a>
          <a href="/game/3">
            <div id="3" className="g-col-6 g-col-md-4 mb-3 deck">Карточка 3</div>
          </a>
          <a href="/game/4">
            <div id="4" className="g-col-6 g-col-md-4 mb-3 deck">Карточка 4</div>
          </a>
          <a href="/game/5">
            <div id="5" className="g-col-6 g-col-md-4 mb-3 deck">Карточка 5</div>
          </a>
        </div>
      </div>
    </Layout>
  );
};
