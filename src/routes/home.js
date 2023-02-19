import React, { useState } from "react";
import "../components/css/general.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addtodo } from "../features/addtodoslice.js";
import Todocard from "../components/todocard";

const Home = () => {
  const todos = useSelector((state) => state.addtodo.todos);
  const dispatch = useDispatch();
  const [fieldvalue, setfieldvalue] = useState("");
  const [datefieldvalue, setdatefieldvalue] = useState();
  const [colorfieldvalue, setcolorfieldvalue] = useState();
  const [showform, setshowform] = useState(false);
  const [showbutton, setshowbutton] = useState(true);

  return (
    <div className="cont">
      <h1>Welcome to the Home page</h1>
      <p>This is the home page of your application.</p>

      {showform ? (
        <form
          className="addtodoform card"
          action="#"
          onSubmit={(event) => {
            if (fieldvalue && datefieldvalue) {
              dispatch(
                addtodo({
                  id: Math.random(),
                  value: fieldvalue,
                  date: datefieldvalue,
                  color: colorfieldvalue,
                })
              );
              setshowform(false);
              setshowbutton(true);
            }
            event.preventDefault();
            setfieldvalue("");
          }}
        >
          <input
            style={{ width: "100%" }}
            className="addtodoinput"
            name="todotitle"
            type="text"
            onChange={(e) => {
              setfieldvalue(e.target.value);
            }}
            value={fieldvalue}
            placeholder="Title"
          />
          <div className="groupallabove">
            <input
              className="colorpicker"
              type="color"
              onChange={(e) => colorfieldonchange(e.target.value)}
            />
            <div className="groupall">
              <input
                name="duedate"
                type="datetime-local"
                onChange={(e) => {
                  setdatefieldvalue(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <input name="submit" type="submit" />
            </div>
          </div>
        </form>
      ) : (
        <div></div>
      )}

      {showbutton ? (
        <button
          className="blackbutton"
          onClick={() => {
            setshowform(true);
            setshowbutton(false);
          }}
        >
          Add Task
        </button>
      ) : (
        <div></div>
      )}

      <div className="todolist">
        {todos.map((todo) => (
          <Todocard
            name={todo.value}
            date={todo.date}
            color={todo.color}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );

  function colorfieldonchange(e) {
    setcolorfieldvalue(e);
    console.log(e);
  }
};

export default Home;
