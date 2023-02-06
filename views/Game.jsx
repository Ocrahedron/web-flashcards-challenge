const React = require('react');
const Layout = require('./Layout');

module.exports = function Game({ card }) {
  // console.log(findAllCards)

  // const { findAllCards } = props;
  // console.log(findAllCards)
  // { const randomId = Math.Floor(Math.random() * findAllCards.length); }
  return (
    <Layout>
      <div className="gameContainer">
        <form action={`/game/${card.deck_id}/${card.id}`} method="post">
          <div className="card">
            <p>{card.question}</p>
            <button id={`${card.id}`} name="да" type="button">Да</button>
            <button id={`${card.id}`} name="нет" type="button">Нет</button>
          </div>
        </form>
      </div>
      {/* {question, answer} */}
    </Layout>
  );
};
