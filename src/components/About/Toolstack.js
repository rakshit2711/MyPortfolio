import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiAzuredevops,
  SiDynatrace,
  SiSonarqube,
} from "react-icons/si";
import AppDynamicsIcon from "../../components/CustomIcons/AppDynamicsIcon"; 
import DynatraceIcon from "../../components/CustomIcons/DynatraceIcon";
import HuggingFaceIcon from "../../components/CustomIcons/HuggingFaceIcon"; 
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAzuredevops />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDynatrace />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AppDynamicsIcon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <HuggingFaceIcon />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DynatraceIcon />
      </Col>
    </Row>
  );
}

export default Toolstack;
