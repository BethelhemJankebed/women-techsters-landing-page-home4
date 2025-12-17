import "../css/hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          The Best Place
          <br />
          To Learn And Play
          <br />
          For Kids
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <div className="hero-buttons">
          <button className="primary">Enroll Now</button>
          <button className="secondary">Watch Video</button>
        </div>
      </div>

      <div className="hero-images">
        <img src="/kid1.png" alt="kid" />
        <img src="/kid2.png" alt="graduate kid" />
      </div>
    </section>
  );
}

export default Hero;
