import React from 'react'
import Logo from 'antibankruptcy/src/Assets/Logo.jpg'
function Navbar() {
  return (
    <>
    <nav className="navbar bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src={Logo } alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
      Anti-Bankruptcy
    </a>
  </div>
</nav>
    </>
  )
}

export default Navbar