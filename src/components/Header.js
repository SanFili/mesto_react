import logo from '../logo.svg';

function Header() {
    return (
      <header className="header root__section">
        <img src={logo} alt="mesto logo" className="logo" />
      </header>
    )
}

export default Header;