const React = require('react');
const Layout = require('./Layout');

module.exports = function Entering() {
  return (
    <Layout>
      <script>Логин</script>
      <input type="text" />
      <script>Пароль</script>
      <input type="text" />
      <button type="submit">Нажми меня</button>
      <script>Не зарегестрированы?</script>
      <button type="submit">Регистрация</button>
    </Layout>
  );
};
