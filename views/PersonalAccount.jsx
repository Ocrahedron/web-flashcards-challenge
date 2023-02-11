const React = require('react');
const Layout = require('./Layout');

module.exports = function PersonalAccount({ allRounds, allCards }) {
  return (
    <Layout>
      <div className="user">
        <table className="table table-striped">
          <tr>
            <td>Date</td>
            <td>Cards in Deck</td>
            <td>First Guess Correct</td>
            <td>Total Guesses</td>
          </tr>

          {allRounds && allRounds.map((el) => (
            <tr>
              <td>{el.date.toLocaleString()}</td>
              <td>{allCards.length}</td>
              <td>{el.firstAnswer}</td>
              <td>{el.allAnswers}</td>
            </tr>
          ))}
        </table>

      </div>
    </Layout>
  );
};
