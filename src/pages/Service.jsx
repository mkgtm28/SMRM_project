import { Code2, PenTool, Smartphone, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "./Service.css";
function Service() {
  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Modern, responsive and scalable web applications tailored to your business needs.",
    },
    {
      icon: PenTool,
      title: "UI/UX Design",
      description:
        "Beautiful and user-friendly interfaces designed to create a smooth digital experience.",
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description:
        "Websites that look and work perfectly across phones, tablets and desktop devices.",
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description:
        "Ongoing support and improvements to keep your digital products running smoothly.",
    },
  ];
  return (
    <div className="service-page">
      {" "}
      {/* ========================= HEADER ========================= */}{" "}
      <section className="service-header">
        {" "}
        <span className="section-label">
          {" "}
          <span></span> Our Services{" "}
        </span>{" "}
        <h1>
          {" "}
          What <span>We Offer</span>{" "}
        </h1>{" "}
        <p>
          {" "}
          We provide a range of digital services to help you build, scale, and
          succeed in the online world.{" "}
        </p>{" "}
      </section>{" "}
      {/* ========================= SERVICES ========================= */}{" "}
      <section className="services-grid">
        {" "}
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div className="service-card" key={index}>
              {" "}
              <div className="service-icon">
                {" "}
                <Icon size={24} />{" "}
              </div>{" "}
              <div className="service-card-content">
                {" "}
                <h2> {service.title} </h2> <p> {service.description} </p>{" "}
              </div>{" "}
              <div className="service-arrow">
                {" "}
                <ArrowRight size={19} />{" "}
              </div>{" "}
            </div>
          );
        })}{" "}
      </section>{" "}
      {/* ========================= CTA ========================= */}{" "}
      <section className="service-cta">
        {" "}
        <div>
          {" "}
          <span> Have a project in mind? </span>{" "}
          <h2>
            {" "}
            Let's build something <span> amazing.</span>{" "}
          </h2>{" "}
        </div>{" "}
        <Link to="/contact" className="service-cta-btn">
          {" "}
          Let's Talk <ArrowRight size={18} />{" "}
        </Link>{" "}
      </section>{" "}
    </div>
  );
}
export default Service;
