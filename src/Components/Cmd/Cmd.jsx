import React, { useEffect, useRef, useState } from "react";
import list from "./data.json"

const Cmd = () => {
  const [cursor, setCursor] = useState(false);
  const [inputValue, setInputValue] = useState();
  const [commendList, setCommendList] = useState([]);
  const [theme, setTheme] = useState("dark");
  const inputRef = useRef();
  const cursorRef = useRef();
  const focusRef = useRef();
  const spanRef = useRef();
  const themeRef = useRef();
  const arrow = ">>> ";

  useEffect(() => {
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  
  useEffect(() => {
    if (spanRef.current && inputRef.current) {
      const spanHeight = spanRef.current.offsetHeight;
      inputRef.current.scrollTop = spanHeight;
    }
  }, [inputValue]);
  
  const handleClickOutside = (e) => {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      setCursor(false);
    }
  };
  
  const onChangeInput = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };
  
  const commandResult = (data) => {
    if (data === "clear") {
      setCommendList([]);
      return;
    }
    let value;
    if (list[data] === undefined) {
      value = "NOT FOUND";
    } else {
      value = list[data];
    }
let arrowInput = arrow + inputValue;
    setCommendList((prevCommentList) => [
      ...prevCommentList,
      arrowInput,
      value,
    ]);
  
    
    if (data === "setdark") {
      setTheme("dark");
    } else if (data === "setlight") {
      setTheme("light");

    }

    if (data === "github" || data === "linkedin" || data === "twitter") {
      window.open(value, `_blank`).focus();
    }
  };
  
  const handlekeySubmit = (e) => {
    if (e.key === "Enter") {
      let word = inputValue.split(" ");
      console.log("word", word);
      commandResult(word[0]);

      setInputValue("");
    }
  };
  
  const handleDivClick = () => {
    setCursor(true);
    focusRef.current.focus();
  };

  return (
    <div className="h-96 w-full flex justify-center items-center">
      <div
        ref={themeRef}
        onClick={handleDivClick}
        className={` h-3/4 w-2/4 border-b-2 drop-shadow-[0_35px_35px_rgba(255,255,255,0.25)]  ${theme === "dark"?"bg-black text-white" : "bg-neutral-300 text-black" } `}
      >
        <div className="flex w-full ">
          <div className="w-4 h-4   bg-red-700 rounded-full mt-2 mx-1" />
          <div className="w-4 h-4 bg-yellow-400 rounded-full mt-2 mx-1" />
          <div className="w-4 h-4 bg-green-700 rounded-full mt-2 mx-1" />
        </div>
        <div
          style={{ overflow: "auto", width: "calc(100% - 0.5rem)" }}
          ref={inputRef}
          className="h-5/6 mt-2 ml-2 font-mono text-lg"
        >
          <div id="cmd-container">
            <span className="p-1"> Get started by typing `help` command</span>
            <div
              ref={spanRef}
              style={{
                padding: "5px",
                overflowWrap: "anywhere",
                whiteSpace: "pre-wrap",
              }}
              className=" flex flex-col"
            >
              <span>
                {commendList &&
                  commendList.map((command, index) => (
                    <span key={index}>
                      {command}
                      <br />
                    </span>
                  ))}
                <span ref={cursorRef}>{arrow}{inputValue}</span>

                {cursor && (
                  <span className="inline-block bg-gray-500 animate-blink w-2"> </span>
                )}
              </span>
            </div>
          </div>
        </div>
      <input
        ref={focusRef}
        type="text"
        className="ml-1 bg-white outline-none border-none no-underline opacity-0 w-0 h-0"
        onChange={onChangeInput}
        value={inputValue}

        onKeyDown={handlekeySubmit}
      />
    </div>
      </div>
  );
};

export default Cmd;







