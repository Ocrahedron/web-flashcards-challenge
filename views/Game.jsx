const React = require('react');
const Layout = require('./Layout');

module.exports = function Game({ card }) {
  return (
    <Layout>
      <div id="question" className="gameContainer d-flex flex-wrap align-items-center justify-content-center">
        <div className="card d-flex justify-content-center" style={{ height: '30%', width: '100%' }}>
          <p id="p">{card.question}</p>
          <button data-id={`${card.id}`} id="yes" className="btn btn-outline-dark mr-2" data-name="да" type="button">Да</button>
          <button data-id={`${card.id}`} id="no" className="btn btn-outline-dark mr-2" data-name="нет" type="button">Нет</button>
        </div>
      </div>
    </Layout>
  );
};
