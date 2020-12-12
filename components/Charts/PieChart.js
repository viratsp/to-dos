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
          { title: "One", value: todo_data.length, color: "yellow" },
          {
            title: "Two",
            value: inProgressData.length,
            color: "green",
          },
          { title: "Three", value: done_data.length, color: "blue" },
        ]}
      />
    </div>
  );
}

export default PieChartComponent;
