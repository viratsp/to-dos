import React from "react";

const onDragStart = (ev, id) => {
  console.log(id);
  ev.dataTransfer.setData("id", id);
};

function TaskCard(props) {
  return (
    <div
      className="task-card"
      draggable
      onDragStart={(e) => onDragStart(e, "hi")}
    >
      <div className="d-flex s-btw" style={{ alignItems: "center" }}>
        <p
          className="text-white"
          style={{
            backgroundColor:
              props.values.tag == "missilineous"
                ? "#F6B902"
                : props.values.tag === "official"
                ? "#806CA5"
                : "green",
            borderRadius: "5px",
            padding: "2px 8px",
          }}
        >
          {props.values.tag ? props.values.tag : "personal"}
        </p>
        <img
          style={{ height: "20px", width: "20px" }}
          onClick={() => console.log(props)}
          src="https://www.flaticon.com/svg/static/icons/svg/2089/2089793.svg"
        ></img>
      </div>
      <div className="d-flex s-btw task-name-row">
        <p className="task-name">{props.values.task_name}</p>
        <p className="date">Nov 1</p>
      </div>
      <p className="description">{props.values.description}</p>
      <hr />
      <p>Sub Task 1</p>
    </div>
  );
}

export default TaskCard;
