const React = require('react');
const Layout = require('./Layout');

module.exports = function Authorization() {
  return (
    <Layout>
      <script>Придумайте логин</script>
      <input type="text" />
      <script>Придумайте пароль</script>
      <input type="text" />
      <button type="submit">Зарегестрироваться</button>
    </Layout>
  );
};
