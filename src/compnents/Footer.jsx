import "../css/footer.css";

export default function Footer() { return ( <footer className="footer"> <div className="footer-grid"> <div> <h3>Edunity</h3> <p>The best place for kids to learn and grow.</p> </div>

<div>
      <h4>Quick Links</h4>
      <ul>
        <li>About Us</li>
        <li>Courses</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>

    <div>
      <h4>Contact</h4>
      <p>Email: info@edunity.com</p>
      <p>Phone: +251 900 000 000</p>
    </div>
  </div>

  <p className="footer-bottom">© 2025 Edunity. All rights reserved.</p>
</footer>

); }