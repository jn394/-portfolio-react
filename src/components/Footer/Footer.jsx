import React from "react";

const Footer = props => {
    return (
        <footer className="footer py-4 mt-4">
        <div className="container">
            <ul className="list-unstyled list-inline text-center m-0">
                <li className="list-inline-item">
                    <a href="https://github.com/jn394" target="_blank"><i className="fab fa-github"></i></a>
                </li>
                <li className="list-inline-item">
                    <a href="https://www.linkedin.com/in/jn394" target="_blank"><i className="fab fa-linkedin"></i></a>
                </li>
            </ul>
        </div>
    </footer>
    );
};

export default Footer;
