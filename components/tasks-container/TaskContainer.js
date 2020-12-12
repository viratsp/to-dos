import React from "react";
import TaskCard from "../cards/TaskCard";

const onDragOver = (ev) => {
  ev.preventDefault();
};

function TaskContainer(props) {
  const [values, setValues] = React.useState([]);
  React.useEffect(() => {
    setValues(JSON.parse(localStorage.getItem("values")));
  }, []);
  let filtered_values;
  if (values) {
    filtered_values = values.filter((value) => value.branch === props.branch);
  } else {
    filtered_values = undefined;
  }

  return (
    <div className="task-container droppable" onDragOver={(e) => onDragOver(e)}>
      <div
        style={{
          backgroundColor:
            props.branch === "to-do"
              ? "#ddc54d"
              : props.branch === "in-progress"
              ? "rgb(39, 174, 96)"
              : "#0069D9",
        }}
        className="task-container-header"
      >
        <p
          style={{
            color: props.branch === "to-do" ? "black" : "#fff",
            marginTop: "15px",
          }}
        >
          {props.branch}
        </p>
      </div>

      {filtered_values != undefined ? (
        filtered_values.map((item, index) => (
          <div key={index} style={{ padding: "10px" }}>
            <TaskCard key={index} values={item} />
          </div>
        ))
      ) : (
        <>
          <p>No Tasks found... Create new task</p>
        </>
      )}
    </div>
  );
}

export default TaskContainer;
