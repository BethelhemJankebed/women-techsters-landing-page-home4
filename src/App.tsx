import styles from "./App.module.css";

const navLinks = ["Home", "About Us", "Classes", "Projects", "Blog", "Contact"];

const stats = [
  { label: "Happy Students", value: "10k+" },
  { label: "Online Classes", value: "5.8k" },
];

const categories = [
  { title: "Design", meta: "UI/UX, Graphic" },
  { title: "Development", meta: "Web, Mobile" },
  { title: "Business", meta: "Strategy, Ops" },
  { title: "Marketing", meta: "Growth, SEO" },
  { title: "Data Science", meta: "ML, Analytics" },
  { title: "Photography", meta: "Portrait, Product" },
];

const courses = [
  {
    title: "UI/UX Design From Scratch",
    author: "By Eleanor Pena",
    price: "$68.00",
    level: "Beginner",
    duration: "8h 20m",
    rating: 4.9,
    students: 1240,
    accent: "linear-gradient(135deg, #8c7bff, #5e54f7)",
  },
  {
    title: "React & TypeScript Bootcamp",
    author: "By Ralph Edwards",
    price: "$74.00",
    level: "Intermediate",
    duration: "12h 10m",
    rating: 4.8,
    students: 980,
    accent: "linear-gradient(135deg, #64d8ff, #4b9bff)",
  },
  {
    title: "Product Marketing Playbook",
    author: "By Courtney Henry",
    price: "$59.00",
    level: "All Levels",
    duration: "6h 05m",
    rating: 4.7,
    students: 760,
    accent: "linear-gradient(135deg, #ffb86c, #ff7a59)",
  },
  {
    title: "Data Visualization with Python",
    author: "By Jacob Jones",
    price: "$82.00",
    level: "Intermediate",
    duration: "9h 45m",
    rating: 4.9,
    students: 1120,
    accent: "linear-gradient(135deg, #7dd3fc, #34d399)",
  },
];

const instructors = [
  {
    name: "Annette Black",
    title: "Design Lead",
    focus: "UI/UX",
    hue: "#f5f0ff",
  },
  {
    name: "Wade Warren",
    title: "Software Architect",
    focus: "Frontend",
    hue: "#e9f5ff",
  },
  {
    name: "Jenny Wilson",
    title: "Marketing Strategist",
    focus: "Growth",
    hue: "#fff3e5",
  },
  {
    name: "Savannah Nguyen",
    title: "Data Scientist",
    focus: "Analytics",
    hue: "#e9fbf3",
  },
];

const testimonials = [
  {
    quote:
      "CourseHub helped me switch careers. The projects feel like real work and the mentors are responsive.",
    name: "Arlene McCoy",
    role: "Product Designer",
  },
  {
    quote:
      "The React track was spot on. I landed an interview within weeks after polishing my portfolio projects.",
    name: "Bessie Cooper",
    role: "Frontend Engineer",
  },
];

function App() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.logo}>CourseHub</div>
        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link} href="#" className={styles.navLink}>
              {link}
            </a>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <button className={styles.linkButton}>Log in</button>
          <button className={styles.primaryButton}>Sign up</button>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <div className={styles.heroBadge}>Happy Student</div>
            <h1 className={styles.heroTitle}>
              The Best Place To Learn And Play For Kids
            </h1>
            <p className={styles.heroSubtitle}>
              Let your child thrive with smart, compassionate teaching and fun
              activities designed for early learners.
            </p>
            <div className={styles.heroActions}>
              <div className={styles.searchBar}>
                <input
                  aria-label="Search classes"
                  placeholder="Search classes or activities"
                />
                <button>Search</button>
              </div>
              <div className={styles.heroButtons}>
                <button className={styles.primaryButton}>Enroll Now</button>
                <button className={styles.ghostButton}>Watch Now</button>
              </div>
            </div>
            <div className={styles.stats}>
              {stats.map((item) => (
                <div key={item.label} className={styles.statCard}>
                  <div className={styles.statValue}>{item.value}</div>
                  <div className={styles.statLabel}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.visualPanel}>
              <div className={styles.visualBadge}>Creative Kids</div>
              <div className={styles.visualTitle}>Playful Learning</div>
              <p className={styles.visualMeta}>Arts · Music · Science</p>
              <div className={styles.visualFooter}>
                <span className={styles.avatarStack}>
                  <span />
                  <span />
                  <span />
                </span>
                <span className={styles.visualCount}>230 joined</span>
              </div>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.floatingLabel}>Qualified Teachers</div>
              <div className={styles.floatingValue}>Safe & Caring</div>
              <p className={styles.floatingMeta}>Early education specialists</p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Categories</p>
              <h2>Explore learning paths</h2>
              <p className={styles.sectionSubtitle}>
                Curated tracks to help you master the most in-demand skills.
              </p>
            </div>
            <button className={styles.ghostButton}>View all</button>
          </div>
          <div className={styles.grid}>
            {categories.map((cat) => (
              <div key={cat.title} className={styles.categoryCard}>
                <div className={styles.categoryIcon} />
                <div>
                  <div className={styles.cardTitle}>{cat.title}</div>
                  <div className={styles.cardMeta}>{cat.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Popular</p>
              <h2>Trending courses</h2>
              <p className={styles.sectionSubtitle}>
                Practical lessons, hands-on projects, and mentor feedback.
              </p>
            </div>
            <div className={styles.filters}>
              <button className={styles.filterActive}>All</button>
              <button>Design</button>
              <button>Development</button>
              <button>Marketing</button>
            </div>
          </div>
          <div className={styles.courseGrid}>
            {courses.map((course) => (
              <div key={course.title} className={styles.courseCard}>
                <div
                  className={styles.courseImage}
                  style={{ backgroundImage: course.accent }}
                />
                <div className={styles.courseBody}>
                  <div className={styles.courseMeta}>
                    <span className={styles.badge}>{course.level}</span>
                    <span className={styles.dot} />
                    <span>{course.duration}</span>
                  </div>
                  <h3 className={styles.courseTitle}>{course.title}</h3>
                  <p className={styles.cardMeta}>{course.author}</p>
                  <div className={styles.courseStats}>
                    <span className={styles.rating}>{course.rating} ★</span>
                    <span className={styles.dot} />
                    <span>{course.students} students</span>
                    <span className={styles.price}>{course.price}</span>
                  </div>
                  <div className={styles.courseActions}>
                    <button className={styles.primaryButton}>Enroll now</button>
                    <button className={styles.linkButton}>View details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Instructors</p>
              <h2>Meet the mentors</h2>
              <p className={styles.sectionSubtitle}>
                Industry experts guiding you with personalized feedback.
              </p>
            </div>
            <button className={styles.ghostButton}>See all mentors</button>
          </div>
          <div className={styles.grid}>
            {instructors.map((mentor) => (
              <div
                key={mentor.name}
                className={styles.instructorCard}
                style={{ background: mentor.hue }}
              >
                <div className={styles.instructorAvatar} />
                <div className={styles.cardTitle}>{mentor.name}</div>
                <div className={styles.cardMeta}>{mentor.title}</div>
                <span className={styles.badgeMuted}>{mentor.focus}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Voices</p>
              <h2>Learner stories</h2>
              <p className={styles.sectionSubtitle}>
                Hear how CourseHub accelerates careers and confidence.
              </p>
            </div>
            <button className={styles.ghostButton}>Read more</button>
          </div>
          <div className={styles.testimonialGrid}>
            {testimonials.map((item) => (
              <div key={item.name} className={styles.testimonialCard}>
                <p className={styles.testimonialQuote}>{item.quote}</p>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.instructorAvatar} />
                  <div>
                    <div className={styles.cardTitle}>{item.name}</div>
                    <div className={styles.cardMeta}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div>
            <p className={styles.eyebrow}>Ready to start?</p>
            <h2>Join CourseHub today</h2>
            <p className={styles.sectionSubtitle}>
              Build skills, earn certificates, and connect with peers worldwide.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <button className={styles.primaryButton}>Create account</button>
            <button className={styles.ghostButton}>Schedule a demo</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.logo}>CourseHub</div>
        <p className={styles.footerText}>
          Premium learning experiences crafted for ambitious students.
        </p>
        <div className={styles.footerMeta}>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Support</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
