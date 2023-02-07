const React = require('react');
const Layout = require('./Layout');

module.exports = function Game({ card }) {
  return (
    <Layout>
      <div id="question" className="gameContainer">
        <div className="card">
          <p id="p">{card.question}</p>
          <button data-id={`${card.id}`} id="yes" className="btn1 btn-outline-dark mr-2" data-name="да" type="button">Да</button>
          <button data-id={`${card.id}`} id="no" className="btn1 btn-outline-dark mr-2" data-name="нет" type="button">Нет</button>
        </div>
      </div>
    </Layout>
  );
};
