const React = require('react');
const Layout = require('./Layout');

module.exports = function Entering() {
  return (
    <Layout>
      <p>Логин</p>
      <input type="text" />
      <p>Пароль</p>
      <input type="text" />
      <button type="submit">Нажми меня</button>
      <p>Не зарегестрированы?</p>
      <button type="submit">Регистрация</button>
    </Layout>
  );
};
