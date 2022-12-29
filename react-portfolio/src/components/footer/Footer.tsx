import React from "react";
import "./footer.css";

export default function Footer(): JSX.Element {
  return (
    <footer>
      <div className="row">
        <div className="column">
          <a href="/" className="footer__logo">
            Daani Faiz
          </a>

          <hr className="footer__hr"></hr>
          <div className="footer__body">
            This simple portfolio was developed using node.js and typescript.
            Reach out over LinkedIn if found it interesting and would like to
            get in touch!
          </div>
        </div>
        <div className="column">
          <ul className="permalinks">
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#linkedin">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <small>&copy; Daani Faiz. All rights reserved.</small>
      </div>
    </footer>
  );
}
