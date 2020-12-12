import React from "react";
import { Form, Image } from "react-bootstrap";

const SubTask = () => {
  return (
    <Form.Group
      className="d-flex"
      style={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Form.Check type="checkbox" />
      <Form.Control type="email" placeholder="Task Name" />
      <Image
        className="ml-2"
        height="20px"
        src="https://www.flaticon.com/svg/static/icons/svg/833/833262.svg"
      />
    </Form.Group>
  );
};

function SubTaskForm() {
  return (
    <div className="p-5">
      <p>Sub-Tasks</p>
      <SubTask />
      <SubTask />
      <SubTask />
      <hr />
      <p>New Sub Task</p>
    </div>
  );
}

export default SubTaskForm;
