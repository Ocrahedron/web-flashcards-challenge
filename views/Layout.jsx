const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/style.css" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous" />
        <script defer src="/js/application.js" />
        <title>Flashcards</title>
      </head>
      <body>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="/">Flashcards</a>
          <div className="d-flex justify-content-end">
            <a id="btnAcc" className="btn btn-outline-dark mr-2" href="/account">Account</a>
            <a id="btnReg" className="btn btn-outline-dark mr-2" href="/authorization">Register</a>
            <a id="btnHom" className="btn btn-outline-dark mr-2" href="/">Home</a>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
};
