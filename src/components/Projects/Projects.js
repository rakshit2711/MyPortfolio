import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects and professional experiences I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath=""
              // isBlog={false}
              title="Blue Rewards - Loyalty Platform"
              description="Enhanced mobile loyalty platform for Al-Futtaim, integrating complex payment and points systems. Built with Python, JavaScript, and Azure cloud services. Improved customer engagement and retention through advanced loyalty features."
              // ghLink=""
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="M&S ACE Retail Application"
              description="Engineered and enhanced retail applications for Marks & Spencer using microservices architecture. Implemented with Kubernetes, Azure DevOps, and MongoDB. Focused on improving customer experience and operational efficiency."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Reconciliation Platform"
              description="Architected and implemented a comprehensive reconciliation platform at Publicis Sapient. Automated business processes and reduced manual errors using Node.js, Python, and Tornado framework."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Payment Gateway Integration"
              description="Developed and maintained high-performance backend APIs at Nimbbl for seamless payment experiences. Integrated Simpl payment gateway enabling one-touch payments and increased transaction success rates using ASP.NET and MSSQL."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Legacy System Migration"
              description="Led migration of legacy Python 2 codebase to Python 3 and Oracle to MySQL database migration at Guardian Life. Modernized applications using contemporary tech stack including ReactJS and Spring Boot."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""
              isBlog={false}
              title="Microservices with AI Integration"
              description="Developed robust Python wrappers for GPT-4 APIs and designed microservices like Giftify Campaigns and Merchant Portals. Implemented CI/CD pipelines and Azure integrations for scalable, AI-powered solutions."
              ghLink=""
              demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
 