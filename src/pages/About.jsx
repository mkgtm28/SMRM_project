
import {
  Target,
  Eye,
  Code2,
  Users,
  Clock3,
} from "lucide-react";

import "./About.css";

function About() {
  const teamMembers = [
    {
      name: "Shahil Gautam",
      role: "Frontend Developer",
      image: "/team/member1.jpg",
      description: "Focused on creating modern and responsive user interfaces.",
    },
    {
      name: "Mayank Gautam",
      role: "Backend Developer",
      image: "/team/member2.jpg",
      description: "Builds reliable APIs and backend systems for our projects.",
    },
    {
      name: "Rakesh Kumar Yadav",
      role: "UI/UX Designer",
      image: "/team/member3.jpg",
      description: "Designs clean, intuitive, and user-friendly digital experiences.",
    },
    {
      name: "Mandeep Singh",
      role: "Full Stack Developer",
      image: "/team/member4.jpg",
      description: "Works across frontend and backend to bring ideas to life.",
    },
  ];
  return (
    <div className="about-page">

      {/* =========================
          ABOUT HERO
      ========================= */}

      <section className="about-hero">

        <div className="about-content">

          <div className="about-text">

            <span className="section-label">
              <span></span>
              About Us
            </span>

            <h1>
              Turning Ideas Into
              <br />
              <span>Digital Reality</span>
            </h1>

            <p>
              At SMRM, we are passionate about technology and
              creativity. We specialize in building modern web
              applications, helping businesses and individuals
              bring their ideas to life.
            </p>


            {/* STATS */}

            <div className="stats">

              <div className="stat">
                <strong>5+</strong>
                <span>Projects Completed</span>
              </div>

              <div className="stat">
                <strong>3+</strong>
                <span>Happy Clients</span>
              </div>

              <div className="stat">
                <strong>2+</strong>
                <span>Years Experience</span>
              </div>

            </div>

          </div>


          {/* IMAGE */}

          <div className="about-image">

            <div className="image-glow"></div>

            <div className="code-window">

              <div className="window-header">

                <span></span>
                <span></span>
                <span></span>

              </div>

              <div className="code-content">

                <span className="code-blue">
                  &lt;SMRM&gt;
                </span>

                <span>
                  &nbsp;&nbsp;Build
                </span>

                <span className="code-purple">
                  something
                </span>

                <span>
                  &nbsp;&nbsp;great
                </span>

                <span className="code-blue">
                  &lt;/SMRM&gt;
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          MISSION / VISION
      ========================= */}

      <section className="mission-section">

        <div className="info-card">

          <div className="info-icon">
            <Target size={23} />
          </div>

          <div>
            <h2>Our Mission</h2>

            <p>
              To deliver high-quality, user-focused digital
              solutions that create real value and
              long-term success.
            </p>
          </div>

        </div>


        <div className="info-card">

          <div className="info-icon">
            <Eye size={23} />
          </div>

          <div>
            <h2>Our Vision</h2>

            <p>
              To be a trusted partner in the digital journey
              of every client, everywhere.
            </p>
          </div>

        </div>

      </section>
      {/* =========================
    TEAM
========================= */}

      <section className="team-section">

        <div className="team-heading">

          <span className="section-label">
            <span></span>
            Our Team
          </span>

          <h2>
            Meet the people
            <br />
            <span>behind SMRM.</span>
          </h2>

          <p>
            We are a group of passionate people working together
            to turn ideas into meaningful digital experiences.
          </p>

        </div>


        <div className="team-grid">

          {teamMembers.map((member) => (

            <div className="team-card" key={member.name}>

              <div className="team-image">

                <img
                  src={member.image}
                  alt={member.name}
                />

              </div>

              <div className="team-info">

                <h3>{member.name}</h3>

                <span>{member.role}</span>

                <p>{member.description}</p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          VALUES
      ========================= */}

      <section className="values-section">

        <div className="value-item">

          <div className="value-icon">
            <Code2 size={20} />
          </div>

          <div>
            <h3>Innovation</h3>
            <p>
              We continuously explore better
              ways to solve problems.
            </p>
          </div>

        </div>


        <div className="value-item">

          <div className="value-icon">
            <Users size={20} />
          </div>

          <div>
            <h3>Collaboration</h3>
            <p>
              Great results come from
              working together.
            </p>
          </div>

        </div>


        <div className="value-item">

          <div className="value-icon">
            <Clock3 size={20} />
          </div>

          <div>
            <h3>Reliability</h3>
            <p>
              We focus on quality and
              dependable solutions.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default About;

