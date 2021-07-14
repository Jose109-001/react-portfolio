import { useState, useEffect } from "react"; // hooks == functions

// Components are always functions!
const Header = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsSmall(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);

    // When unmount happens
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header className={isSmall ? "small" : ""}>
      <h1>Jose Gaspar</h1>
      <nav>
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact-me">Contact Me</a>
          </li>
          <li>
            <a
              target="_blank"
              href={process.env.PUBLIC_URL + "/Resume/RESUME.pdf"}
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
