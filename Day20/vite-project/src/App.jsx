import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "../components/Navbar";
import Screen from "../components/Screen";
import Button from "../components/Button";

function App() {
  const [theme, setTheme] = useState("dark");
  const [screen, setScreen] = useState("");
  const buttons = [
    {
      label: "7",
      value: 7,
      className: "btn-light",
    },
    {
      label: "8",
      value: 8,
      className: "btn-light",
    },
    {
      label: "9",
      value: 9,
      className: "btn-light",
    },
    {
      label: "DEL",
      value: "DEL",
      className: "btn-light",
    },
    {
      label: "4",
      value: 4,
      className: "btn-light",
    },
    {
      label: "5",
      value: 5,
      className: "btn-light",
    },
    {
      label: "6",
      value: 6,
      className: "btn-light",
    },
    {
      label: "+",
      value: "+",
      className: "btn-light",
    },
    {
      label: "1",
      value: 1,
      className: "btn-light",
    },
    {
      label: "2",
      value: 2,
      className: "btn-light",
    },
    {
      label: "3",
      value: 3,
      className: "btn-light",
    },
    {
      label: "-",
      value: "-",
      className: "btn-light",
    },

    {
      label: ".",
      value: ".",
      className: "btn-light",
    },
    {
      label: "0",
      value: 0,
      className: "btn-light",
    },
    {
      label: "/",
      value: "/",
      className: "btn-light",
    },
    {
      label: "X",
      value: "*",
      className: "btn-light",
    },
    {
      label: "RESET",
      value: "RESET",
      className: "btn-light",
    },
    {
      label: "=",
      value: "=",
      className: "btn-success",
    },
  ];

  return (
    <div className={` App body-${theme} `}>
      <header className="App-header">
        Hi Belcome to my Calculator React App
      </header>
      <main className="w-1/3">
        <Navbar theme={theme} setTheme={setTheme} />
        <Screen theme={theme} screen={screen} />

        <div className={`calc-${theme} grid grid-cols-4 p-4 m-4 gap-4  rounded-xl`}>
          {buttons.map((button) => {
            return (
              <Button
                key={button.value}
                value={button.value}
                theme={theme}
                screen={screen}
                setScreen={setScreen}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
