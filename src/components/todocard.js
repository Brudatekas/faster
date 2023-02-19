import React from "react";
import "./css/general.css";
import { removetodo } from "../features/addtodoslice";
import { useSelector, useDispatch } from "react-redux";

export default function Todocard(props) {
  const dispatch = useDispatch();
  return (
    <div
      style={{ border: "5px solid " + props.color }}
      className="card todotaskcard"
    >
      <p>{props.name}</p>
      <div>
        <p>due {props.date}</p>
        <button
          onClick={() => dispatch(removetodo(props.id))}
          style={{ margin: "0 0 0 5px", background: "none", border: "none" }}
        >
          &#10060;
        </button>
      </div>
    </div>
  );
}
