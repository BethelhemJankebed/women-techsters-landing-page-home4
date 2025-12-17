import "../css/about.css";

export default function About() {
  return (
    <section className="about">
      {" "}
      {/* LEFT SIDE: IMAGES */}{" "}
      <div className="about-images">
        {" "}
        <img
          src="/about-child-1.png"
          alt="Happy child"
          className="img-small"
        />{" "}
        <img src="/about-child-2.png" alt="Student" className="img-large" />{" "}
      </div>
      {/* RIGHT SIDE: TEXT */}
      <div className="about-text">
        <span className="about-tag">ABOUT US</span>
        <h2>
          It's Our Passion To Work With <span>Children</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore.
        </p>

        <ul className="about-list">
          <li>✔️ Quality Educators</li>
          <li>✔️ Safety & Security</li>
          <li>✔️ Play To Learn</li>
          <li>✔️ Homelike Environment</li>
        </ul>

        <button className="btn-primary">About Us</button>
      </div>
    </section>
  );
}
