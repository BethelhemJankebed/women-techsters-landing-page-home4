import styles from "./css/home4.module.css";

import boy from "./assets/img/boycheccks.svg";
import gradGirl from "./assets/img/girl-apple.svg";
import happyGirl from "./assets/img/Girl.jpg";
import smallBoy from "./assets/img/child-1.svg";
import videoImg from "./assets/img/video.jpg";
import smile from "./assets/img/smiling.jpg";
import classImg from "./assets/img/CLass.jpg";
import i1 from "./assets/img/I1.jpg";
import i2 from "./assets/img/I2.jpg";
import i3 from "./assets/img/I3.jpg";
import i4 from "./assets/img/I4.jpg";
import post1 from "./assets/img/last.jpg";
import post2 from "./assets/img/Girl.jpg";
import post3 from "./assets/img/CLass.jpg";
import post4 from "./assets/img/smiling.jpg";
import logo from "./assets/img/logo1.png";

const navLinks = ["Home", "About Us", "Courses", "Pages", "Blog", "Contact"];

const featureCards = [
  { title: "Start Course", body: "Get the best class experience in valuable ways for kids and better bright future partner, knowledge." },
  { title: "Expert Teachers", body: "Educate with expert teachers experience in valuable ways kids and better bright future partner, knowledge.", highlight: true },
  { title: "Strategic Location", body: "Class area in the strategic education place with clean environment for kids partner, knowledge." },
];

const checklist = [
  "Quality Educators",
  "Safety And Security",
  "Plan To Learn",
  "Homelike Environment",
];

const metrics = [
  { value: "2,500", label: "Total Teacher" },
  { value: "5,000", label: "Total Student" },
  { value: "350", label: "Total Classroom" },
  { value: "1,200", label: "Best Awards Won" },
];

const testimonials = [
  { name: "Eleanor Pena", role: "UI/UX Designer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Devon Lane", role: "Product Manager", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { name: "Courtney Henry", role: "Software Engineer", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
];

const instructors = [
  { name: "Cheryl Curry", img: i1 },
  { name: "Willie Diaz", img: i2 },
  { name: "Jimmy Siuntos", img: i3 },
  { name: "Michael Hammond", img: i4 },
];

const posts = [
  { title: "Well-being: Our Love Nurturing Curriculum For Our Kids", img: post1 },
  { title: "Well-being: Our Love Nurturing Curriculum For Our Kids", img: post2 },
  { title: "Well-being: Our Love Nurturing Curriculum For Our Kids", img: post3 },
  { title: "Well-being: Our Love Nurturing Curriculum For Our Kids", img: post4 },
];

function App() {
  return (
    <div className={styles.page}>
      <div className={styles.topbar}>
        <span>Working: Monday - Friday 9am - 5pm</span>
        <span>Hudson, Wisconsin(WI), 54016</span>
      </div>

      <header className={styles.navbar}>
        <div className={styles.brand}>
          <img src={logo} alt="edunity logo" />
        </div>
        <ul className={styles.navLinks}>
          {navLinks.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className={styles.navActions}>
          <button className={styles.iconBtn}>🔍</button>
          <button className={styles.iconBtn}>🛒</button>
          <button className={styles.ghost}>Sign In</button>
          <button className={styles.cta}>Contact</button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <div className={styles.heroEyebrow}>Discover</div>
            <h1 className={styles.heroTitle}>
              The Best Place TO Learn And Play For Kids
            </h1>
            <p className={styles.heroSubtitle}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.heroButtons}>
              <button className={styles.cta}>Browse Course</button>
              <button className={styles.ghost}>Watch Now</button>
            </div>
            <div className={styles.heroStats}>
              <span className={styles.statBadge}>10k+ Student</span>
              <span className={styles.statPill}>5.8k Success Courses</span>
            </div>
          </div>

          <div className={styles.heroVisuals}>
            <div className={styles.heroCard}>
              <div className={styles.heroBubble}>5.8k</div>
              <img src={boy} alt="Happy student" />
            </div>
            <div className={`${styles.heroCard} ${styles.secondary}`}>
              <img src={gradGirl} alt="Graduate student" />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.cardsRow}>
            {featureCards.map((card) => (
              <div
                key={card.title}
                className={`${styles.featureCard} ${card.highlight ? styles.highlight : ""}`}
              >
                <strong>{card.title}</strong>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>About Us</div>
          <div className={styles.twoCol}>
            <div className={styles.aboutImages}>
              <img src={smallBoy} alt="Happy student" />
              <img src={happyGirl} alt="Student smiling" />
            </div>
            <div className={styles.aboutText}>
              <h2>
                It's Our Passion To Work With Children At <span className={styles.highlightWord}>Kindergarten.</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <ul className={styles.aboutList}>
                {checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button className={styles.cta}>About Us</button>
            </div>
          </div>
        </section>

        <section className={styles.videoBand}>
          <img src={videoImg} alt="Kids learning" className={styles.videoFrame} />
        </section>

        <section className={styles.metricsRow}>
          {metrics.map((m) => (
            <div key={m.label} className={styles.metric}>
              <div className={styles.metricValue}>{m.value}</div>
              <div>{m.label}</div>
            </div>
          ))}
        </section>

        <section className={styles.approach}>
          <div className={styles.aboutText}>
            <div className={styles.sectionHeader}>Why Choose Us</div>
            <h2>New Approach To Fun</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className={styles.tagRow}>
              {checklist.map((item) => (
                <span key={item} className={styles.tag}>
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.gallery}>
            <img src={classImg} alt="Class" />
            <img src={smile} alt="Happy child" />
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className={styles.sectionHeader}>Testimonial</div>
          <h2>What Parents Say</h2>
          <div className={styles.testimonialRow}>
            {testimonials.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <p>{t.text}</p>
                <strong>{t.name}</strong>
                <div>{t.role}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.instructors}>
          <div className={styles.sectionHeader}>Teacher</div>
          <h2>Meet Our Instructor</h2>
          <div className={styles.instructorGrid}>
            {instructors.map((i) => (
              <div key={i.name} className={styles.instructorCard}>
                <img src={i.img} alt={i.name} />
                <div>{i.name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.posts}>
          <div className={styles.sectionHeader}>Explore Newsletter</div>
          <h2>Most Popular Post.</h2>
          <div className={styles.postGrid}>
            {posts.map((p, idx) => (
              <div key={idx} className={styles.postCard}>
                <img src={p.img} alt={p.title} />
                <div className={styles.postBody}>
                  <small>8 August 2024 · 3 Comments</small>
                  <strong>{p.title}</strong>
                  <button className={styles.ghost}>Read More</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>edunity</h3>
            <p>
              We create advanced lessons of curriculum for kids to have better future and smart next generation.
            </p>
          </div>
          <div>
            <h4>Address</h4>
            <p>1295 Bagossy Street</p>
          </div>
          <div>
            <h4>Phone</h4>
            <p>(00) 875 784 568</p>
          </div>
          <div>
            <h4>Email</h4>
            <p>info@gmail.com</p>
          </div>
        </div>
        <div className={styles.footerBottom}>Copyright © 2025 edunity | All Right Reserved.</div>
      </footer>
    </div>
  );
}

export default App;
