import "../css/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">edunity</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Courses</li>
        <li>Pages</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
      <button className="nav-btn">Contact</button>
    </nav>
  );
}

export default Navbar;
