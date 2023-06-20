import React from "react";

const Content = (props) => {
  return (
    <div className="p-6 flex-col justify-center items-center">
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
        {props.title}
      </h5>
      <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
        {props.content}
      </p>
      {props.button}
    </div>
  );
};

export default Content;
