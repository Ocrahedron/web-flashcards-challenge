const React = require('react');
const Layout = require('./Layout');

module.exports = function Game({ card }) {
  return (
    <Layout>
      <div className="gameContainer">
        <div id="question" className="d-flex flex-wrap align-items-center justify-content-center">
          {card.question}
        </div>
        <div className="d-flex justify-content-center" style={{ height: '30%', width: '100%' }}>
          <button id={`${card.id}`} className="btn btn-outline-dark mr-2" name="yes" type="button">Да</button>
          <button id={`${card.id}`} className="btn btn-outline-dark mr-2" name="no" type="button">Нет</button>
        </div>
      </div>
      {/* {question, answer} */}
    </Layout>
  );
};
