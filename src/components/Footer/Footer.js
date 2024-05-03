import "./Footer.css";

import YoutubeIcon from "./icons/YoutubeIcon";
import SpotifyIcon from "./icons/SpotifyIcon";
import FacebookIcon from "./icons/FacebookIcon";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">The Generics</div>
      <div className="footer-icons">
        <ul>
          <li>
            <a href="https://www.youtube.com">
              <YoutubeIcon />
            </a>
          </li>
          <li>
            <a href="https://spotify.com">
              <SpotifyIcon />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com">
              <FacebookIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
