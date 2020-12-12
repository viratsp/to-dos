import React from "react";
import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const ToDoContext = React.createContext([]);
function MyApp({ Component, pageProps }) {
  const [toDoValues, setToDoValues] = React.useState([
    { task_name: "", description: "", branch: "", tag: "", date: "" },
  ]);

  return (
    <ToDoContext.Provider
      value={{ toDoValues: toDoValues, setToDoValues: setToDoValues }}
    >
      <Component {...pageProps} />
    </ToDoContext.Provider>
  );
}

export default MyApp;
