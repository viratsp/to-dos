import React from "react";
import Navbar from "../components/navbar/Navbar";
import TaskContainer from "../components/tasks-container/TaskContainer";
import { Container, Row, Col } from "react-bootstrap";
import PieChartComponent from "../components/Charts/PieChart";
function Home() {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col sm="3">
            <PieChartComponent />
          </Col>
          <Col sm="3">
            <TaskContainer branch="to-do" />
          </Col>
          <Col sm="3">
            <TaskContainer branch="in-progress" />
          </Col>
          <Col sm="3">
            <TaskContainer branch="done" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
