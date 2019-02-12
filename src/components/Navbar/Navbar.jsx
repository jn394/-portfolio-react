import React from "react";
// import {Container} from "reactstrap";

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
        {/* <Container> */}
            <div className="container">
                <h1 className="navbar-brand">Junwah Ng (Jay)</h1>
            
                <ul className="navbar-nav">
                    <li className="nav-item">
                            About
                    </li>
                    <li className="nav-item">
                            Portfolio
                    </li>
                    <li className="nav-item">
                            Contact
                    </li>
                </ul>
               {/* </Container> */}
            </div>
        </nav>
    );
};

export default Navbar;
