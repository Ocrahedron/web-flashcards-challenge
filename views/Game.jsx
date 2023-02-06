const React = require('react');
const Layout = require('./Layout');

module.exports = function Game({ findAllCards }) {
  console.log(findAllCards)

  // const { findAllCards } = props;
  // console.log(findAllCards)
  return (
    <Layout>
      { 




      }


      {findAllCards[0].question}
      {/* {question, answer} */}
    </Layout>
  );
};
