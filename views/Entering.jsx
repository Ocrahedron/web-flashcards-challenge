const React = require('react');
const Layout = require('./Layout');

module.exports = function Entering() {
  return (
    <Layout>
      <form id="form">
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">Логин:</label>
          <input type="username" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Пароль:</label>
          <input type="password" className="form-control"/>
        </div>
        <button type="submit" className="btn btn-outline-dark mr-2">Войти</button>
      </form>
    </Layout>
  );
};
