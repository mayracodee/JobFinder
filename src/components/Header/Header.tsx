import "./Header.css";

function Header() {
  return (
    <header>
      <div className="header-container">
        <img
          className="header-logo"
          src="/logo-jobfinder.png"
          alt="JobFinder"
        />

        <nav>
          <a href="#vagas">Vagas</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;