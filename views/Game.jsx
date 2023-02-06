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
        {card.question}
        <button id={`${card.id}`} name="yes" type="button">Да</button>
        <button id={`${card.id}`} name="no" type="button">Нет</button>
      </div>
      {/* {question, answer} */}
    </Layout>
  );
};
