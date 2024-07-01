import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const toggleDropMenu = () => {
    const dropMenu = document.getElementById("menu");
    if (dropMenu?.classList.contains("show")) {
      dropMenu.classList.remove("show");
    } else {
      dropMenu?.classList.add("show");
    }
  };

  return (
    <div className="main-header">
      <header>
        <img src="/mylogo-removebg-preview.png" alt="" />
        <nav>
          <Link className="link" href="/">
            Home
          </Link>
          <Link className="link" href="/Events">
            Events
          </Link>
          <Link className="link" href="/about">
            About
          </Link>
          <Link href="/contact" className="link">
            Contact
          </Link>
        </nav>
        <RxHamburgerMenu className="hamburger" onClick={toggleDropMenu} />
        <div className="drop-down" id="menu">
          <Link className="link" href="/" onClick={toggleDropMenu}>
            Home
          </Link>
          <Link className="link" href="/Events" onClick={toggleDropMenu}>
            Events
          </Link>
          <Link className="link" href="/about" onClick={toggleDropMenu}>
            About
          </Link>
          <Link href="/contact" className="link" onClick={toggleDropMenu}>
            Contact
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
