import React from "react";
import { Button } from "react-bootstrap";
import Link from "next/link";

function Navbar() {
  return (
    <div className="d-flex s-btw navbar">
      <input
        className="search-box"
        type="text"
        placeholder="Search Tasks by title"
      ></input>
      <Link href="/create">
        <Button className="new-task-btn">New Task</Button>
      </Link>
      <Button>New Task</Button>
    </div>
  );
}

export default Navbar;
