import React from "react";
import Button from "./Button";
import Content from "./Content";

function Card(props) {
  return (
    <div className=" w-96 mr-12 mb-12 min-h-[420px] flex-wrap flex rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <a href="#!">
        <img className="rounded-lg h-full" src={props.image} alt="" />
      </a>
      {props.contant}
    </div>
  );
}

export default Card;
