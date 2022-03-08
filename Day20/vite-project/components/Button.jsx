import React from "react";

const Button = ({ theme, value, type, screen, setScreen }) => {
  return (
    <button
      className={`btn  btn-${theme}`}
      onClick={() => {
        setScreen(() => {
          if (value == "DEL") {
            try{
            return screen.slice(0, screen.length - 1);
            }
            catch(e){
              return "Err";
            }
          } else if (value == "=") {
            try
            {
             return (eval(screen)).toString();
            }
            catch(e)
            {
              return "Err";
            }
          } 
          else if (value == "RESET") {
            return "";
          }
          else {
            return screen + value;
          }
        });
      }}
    >
      {value}
    </button>
  );
};

export default Button;
