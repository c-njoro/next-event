import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="links">
        <a
          href="https://github.com/Njoro-Njoro-Generali"
          target="_blank"
          className="linking"
        >
          <IoLogoGithub />
        </a>
        <a href="" className="linking">
          <FaLinkedinIn />
        </a>
        <a href="" className="linking">
          <BsTwitterX />
        </a>
        <a href="" className="linking">
          <GrInstagram />
        </a>
      </div>

      <div className="actions">
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
      </div>
      <footer>
        <p>2024 | Created By Charles | Event App </p>
      </footer>
    </div>
  );
};

export default Footer;
