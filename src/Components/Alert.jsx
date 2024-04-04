import React, { useEffect } from "react";
import Button from "./Button";

function Alert({ showAlert }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-gray-800 opacity-90"
        onClick={showAlert}
      ></div>
      <div>
        (
        <div
          className=" fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-28 py-16 w-1/2 bg-sky-950 text-xl rounded-3xl"
          role="alert"
        >
          <p>
            <strong>{"Your message successfully recived"}</strong>
          </p>
          <Button text={"Close"} onClick={showAlert} className={"my-6 hover:bg-sky-400 duration-500"} />
        </div>
        )
      </div>
    </>
  );
}

export default Alert;
