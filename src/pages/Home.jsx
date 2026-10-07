
import { ArrowRight, Grid2X2, Gauge, MessagesSquare } from "lucide-react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-label">
            <span></span>
            Welcome to SMRM
          </span>

          <h1>
            Build Something
            <br />
            <span>Great Together</span>
          </h1>

          <p>
            We create modern and innovative digital solutions
            that help businesses grow and make an impact
            in the online world.
          </p>

          <div className="hero-buttons">

            <Link to="/service" className="primary-btn">
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link to="/about" className="secondary-btn">
              Learn More
            </Link>

          </div>

        </div>

      </section>


      {/* FEATURES */}

      <section className="features">

        <div className="feature-card">

          <div className="feature-icon">
            <Grid2X2 size={21} />
          </div>

          <div>
            <h3>Modern Design</h3>

            <p>
              Clean and responsive
              UI/UX designs.
            </p>
          </div>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            <Gauge size={21} />
          </div>

          <div>
            <h3>Fast Performance</h3>

            <p>
              Optimized for speed
              and efficiency.
            </p>
          </div>

        </div>


        <div className="feature-card">

          <div className="feature-icon">
            <MessagesSquare size={21} />
          </div>

          <div>
            <h3>Reliable Support</h3>

            <p>
              We're here when
              you need us.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;

