const React = require('react');
const Layout = require('./Layout');

module.exports = function Authorization() {
  return (
    <Layout>
      <form id="form" action="/authorization" method="POST">
        <div className="mb-3">
          <label htmlFor="inputUsername" className="form-label">Логин:</label>
          <input name="username" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword" className="form-label">Придумай пароль:</label>
          <input type="password" name="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-outline-dark mr-2">Зарегистрироваться</button>
      </form>
    </Layout>
  );
};
