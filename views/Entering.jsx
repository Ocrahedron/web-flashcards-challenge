const React = require('react');
const Layout = require('./Layout');

module.exports = function Entering() {
  return (
    <Layout>
      <form id="form" action="/entering" method="POST">
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">Логин:</label>
          <input name="username" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Пароль:</label>
          <input name="password" type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-outline-dark mr-2">Войти</button>
      </form>
    </Layout>
  );
};
