import React from "react";
import TaskForm from "../../components/forms/TaskForm";
import SubTaskForm from "../../components/forms/SubTaskForm";
import { Container, Row, Col } from "react-bootstrap";
import PieChartComponent from "../../components/Charts/PieChart";
function Create() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div style={{ border: "1px solid green", height: "100vh" }}>
            <PieChartComponent />
          </div>
        </Col>
        <Col md={5}>
          <div>
            <TaskForm />
          </div>
        </Col>
        <Col md={4}>
          <div>
            <SubTaskForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Create;
