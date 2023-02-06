const React = require('react');
const Layout = require('./Layout');

module.exports = function Authorization() {
  return (
    <Layout>
      <form id="form">
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">Логин:</label>
          <input type="username" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Придумай пароль:</label>
          <input type="password" className="form-control"/>
        </div>
        <button type="register" className="btn btn-outline-dark mr-2">Зарегистрироваться</button>
      </form>
    </Layout>
  );
};
