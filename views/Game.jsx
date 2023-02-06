const React = require('react');
const Layout = require('./Layout');

module.exports = function Game({ card }) {
  return (
    <Layout>
      <div className="gameContainer" id="question" className="d-flex flex-wrap align-items-center justify-content-center">
        <form action={`/game/${card.deck_id}/${card.id}`} method="post">
          <div className="card" className="d-flex justify-content-center" style={{ height: '30%', width: '100%' }}>
            <p>{card.question}</p>
            <button id={`${card.id}`} name="да" type="button">Да</button>
            <button id={`${card.id}`} name="нет" type="button">Нет</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
