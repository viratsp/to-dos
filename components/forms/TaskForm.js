import React from "react";
import { Form, Button, ButtonGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useFormik } from "formik";
import Router from "next/router";

import { ToDoContext } from "../../pages/_app";

import "react-datepicker/dist/react-datepicker.css";
function TaskForm() {
  const ToDoContexts = React.useContext(ToDoContext);
  // console.log(ToDoContexts);
  function SaveDataToLocalStorage(data) {
    var a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem("values")) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    localStorage.setItem("values", JSON.stringify(a));
  }

  const formik = useFormik({
    initialValues: {
      task_name: "",
      description: "",
      branch: "",
      tag: "",
      date: "",
    },

    onSubmit: (values) => {
      SaveDataToLocalStorage(values);
      Router.push("/home");
    },
  });
  const [startDate, setStartDate] = React.useState(new Date());
  return (
    <div className="p-5">
      <Form.Group>
        <Form.Label>Enter Task Name</Form.Label>
        <Form.Control
          style={{ backgroundColor: "#f2f2f2" }}
          value={formik.task_name}
          onChange={formik.handleChange("task_name")}
          type="email"
          placeholder="Task Name"
        />
      </Form.Group>
      <Form.Group className="mt-4">
        <Form.Label>Enter Description</Form.Label>
        <Form.Control
          value={formik.description}
          onChange={formik.handleChange("description")}
          as="textarea"
          type="text"
          placeholder="Description"
        />
      </Form.Group>
      <Form.Group className="mt-4">
        <p className="form-label"> Branch To</p>
        <ButtonGroup style={{ marginTop: "-10px" }} aria-label="Basic example">
          <Button
            onClick={() => (formik.values.branch = "to-do")}
            variant="outline-secondary"
          >
            To-Do
          </Button>
          <Button
            onClick={() => (formik.values.branch = "in-progress")}
            variant="outline-secondary"
          >
            In-Progress
          </Button>
          <Button
            onClick={() => (formik.values.branch = "done")}
            variant="outline-secondary"
          >
            Done
          </Button>
        </ButtonGroup>
      </Form.Group>
      <p className="mt-4 d-flex form-label">Select Tag</p>
      <Form.Group
        className=" d-flex"
        style={{ justifyContent: "space-between", marginTop: "-10px" }}
      >
        <Form.Check
          onChange={() => (formik.values.tag = "personal")}
          type="checkbox"
          label="Personal"
        />
        <Form.Check
          onChange={() => (formik.values.tag = "official")}
          type="checkbox"
          label="Official"
        />
        <Form.Check
          onChange={() => (formik.values.tag = "missilineous")}
          type="checkbox"
          label="Missilineous"
        />
      </Form.Group>

      <p className="form-label">Select Date</p>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          formik.values.date = date;
        }}
        style={{ backgroundColor: "red" }}
      />

      <div className="mt-4">
        <Button variant="secondary" className="mr-4">
          Cancel
        </Button>
        <Button variant="primary" onClick={formik.handleSubmit}>
          Create
        </Button>
      </div>
    </div>
  );
}

export default TaskForm;
