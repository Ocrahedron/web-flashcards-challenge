const React = require('react');
const Layout = require('./Layout');

module.exports = function Main() {
  return (
    <Layout>
      <div className="d-flex flex-wrap">
        <div className="g-col-6 g-col-md-4 mb-3" style={{ width: '300px', height: '250px', margin: '20px', backgroundColor: '#B5E2BA'}}>Карточка 1</div>
        <div className="g-col-6 g-col-md-4 mb-3" style={{ width: '300px', height: '250px', margin: '20px', backgroundColor: '#B5E2BA'}}>Карточка 2</div>
        <div className="g-col-6 g-col-md-4 mb-3" style={{ width: '300px', height: '250px', margin: '20px', backgroundColor: '#B5E2BA'}}>Карточка 3</div>
        <div className="g-col-6 g-col-md-4 mb-3" style={{ width: '300px', height: '250px', margin: '20px', backgroundColor: '#B5E2BA'}}>Карточка 4</div>
        <div className="g-col-6 g-col-md-4 mb-3" style={{ width: '300px', height: '250px', margin: '20px', backgroundColor: '#B5E2BA'}}>Карточка 5</div>
      </div>
    </Layout>
  );
};
