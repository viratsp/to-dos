import React from "react";
import Navbar from "../../components/navbar/Navbar";
import TaskContainer from "../../components/tasks-container/TaskContainer";
import { Container, Row, Col } from "react-bootstrap";
import PieChartComponent from "../../components/Charts/PieChart";
function Home() {
  return (
    <div>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <PieChartComponent />
          </Col>
          <Col>
            <TaskContainer branch="to-do" />
          </Col>
          <Col>
            <TaskContainer branch="in-progress" />
          </Col>
          <Col>
            <TaskContainer branch="done" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
