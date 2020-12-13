import React from "react";
import { PieChart } from "react-minimal-pie-chart";

function PieChartComponent() {
  const [values, setValues] = React.useState([]);

  React.useEffect(() => {
    setValues(JSON.parse(localStorage.getItem("values")));
  }, []);
  let todo_data, inProgressData, done_data;
  if (values) {
    todo_data = values.filter((value) => value.branch == "to-do");
    inProgressData = values.filter((value) => value.branch == "in-progress");
    done_data = values.filter((value) => value.branch == "done");
  } else {
    todo_data = [];
    inProgressData = [];
    done_data = [];
  }

  return (
    <div className="p-3" style={{ border: "1px solid green", height: "100vh" }}>
      <p>Your Task trends this week</p>
      <PieChart
        data={[
          { title: "One", value: todo_data.length, color: "rgb(246, 185, 2)" },
          {
            title: "Two",
            value: inProgressData.length,
            color: "#28a745",
          },
          { title: "Three", value: done_data.length, color: "#007bff" },
        ]}
      />
      <div
        className="d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "rgb(246, 185, 2)",
          }}
        ></div>
        <span className="ml-2">To-do : {todo_data.length}</span>
      </div>
      <div
        className="d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#28a745",
          }}
        ></div>
        <span className="ml-2">In-Progress : {inProgressData.length}</span>
      </div>
      <div
        className="d-flex"
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <div
          style={{
            height: "16px",
            width: "16px",
            borderRadius: "50%",
            backgroundColor: "#007bff",
          }}
        ></div>
        <span className="ml-2">Done : {done_data.length}</span>
      </div>
    </div>
  );
}

export default PieChartComponent;
