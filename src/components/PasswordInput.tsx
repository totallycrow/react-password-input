import React, { useEffect, useState } from "react";
import "./PasswordInput.css";

export default function PasswordInput({ password, onSuccess }: any) {
  const [passwordChars, setPasswordChars] = useState(password.split(""));
  const [formInput, setFormInput] = useState([]);

  function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const generateRandomIndexes = (password: string) => {
    const maxPassIndex = password.length / 2;
    const minPassLength = 2;

    const randomIndexes = Array.from({ length: maxPassIndex }, () =>
      Math.floor(Math.random() * 40)
    );
  };

  useEffect(() => {
    if (JSON.stringify(passwordChars) === JSON.stringify(formInput))
      alert("correct");
    console.log("useEffect");
    console.log(passwordChars === formInput);
    console.log(passwordChars);
    console.log(formInput);
  }, [formInput]);

  console.log(passwordChars);
  console.log(formInput);
  return (
    <div>
      <h1>PasswordInput</h1>
      <div>{password}</div>
      <div>
        {formInput.map((item) => (
          <div>{item}</div>
        ))}
      </div>
      <div>
        {passwordChars.map((item: any, index: number) => {
          console.log(item);
          return (
            <input
              className="input-item"
              onChange={(e) => {
                const newState = [...formInput];

                // @ts-ignore
                newState[index] = e.target.value;
                setFormInput(newState);
              }}
            ></input>
          );
        })}
      </div>
    </div>
  );
}
