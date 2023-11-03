import React from "react";
import Logo from "antibankruptcy/src/Assets/Logo.png";
function Navbar() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid bg-dark p-2">
          <a className="navbar-brand text-white" href="#">
            {/* Insert Logo here */}
            {/* <img src={Logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" /> */}
            Anti-Bankruptcy
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
