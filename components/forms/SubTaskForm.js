import React from "react";
import { Form, Image, Button } from "react-bootstrap";
import { useFormik } from "formik";

const SubTask = (props) => {
  // console.log(props);
  const handleRemoveClick = (index) => {
    const list = [...props.subTask];
    list.splice(index, 1);
    props.setSubTask(list);
  };

  return (
    <Form.Group
      className="d-flex"
      style={{ alignItems: "center", justifyContent: "space-between" }}
    >
      <Form.Check type="checkbox" />
      <Form.Control
        onChange={props.formik.handleChange("task_name")}
        valule={props.formik.values.task_name}
        type="email"
        placeholder="Task Name"
      />
      <Image
        onClick={() => {
          handleRemoveClick(props.index);
        }}
        className="ml-2"
        height="20px"
        src="https://www.flaticon.com/svg/static/icons/svg/833/833262.svg"
      />
    </Form.Group>
  );
};

function SubTaskForm() {
  const formik = useFormik({
    initialValues: {
      task_name: "",
    },

    onSubmit: (values) => {
      // SaveDataToLocalStorage(values);
      // Router.push("/home");
      console.log(values);
    },
  });
  console.log(formik.values);
  const [subTask, setSubTask] = React.useState([{ values: "" }]);
  console.log(subTask);
  return (
    <div className="p-5">
      <p>Sub-Tasks</p>
      {subTask.map((item, index) => {
        return (
          <SubTask
            formik={formik}
            key={index}
            index={index}
            subTask={subTask}
            setSubTask={setSubTask}
          />
        );
      })}
      <hr />
      <p
        style={{ color: "blue", cursor: "pointer" }}
        onClick={() =>
          setSubTask([...subTask, { values: formik.values.task_name }])
        }
      >
        + New Sub Task
      </p>
      <Button onClick={formik.handleSubmit}>console</Button>
    </div>
  );
}

export default SubTaskForm;
