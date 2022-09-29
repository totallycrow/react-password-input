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
    const maxPassIndex = Math.floor(password.length / 2 - 1);
    console.log("MAX PASS INDEX", maxPassIndex);
    const minPassLength = 2;
    const numberOfIndexes = getRandomInt(0, password.length / 2);
    console.log("NO OF INDEXES", numberOfIndexes);

    let randomIndexes: any = [];

    while (randomIndexes.length < numberOfIndexes) {
      const randomItem = Math.floor(Math.random() * maxPassIndex + 1);
      console.log("random item", randomItem);

      if (!randomIndexes.includes(randomItem)) {
        randomIndexes.push(randomItem);
      }
    }

    // Math.floor(Math.random() * maxPassIndex + 1

    // return randomIndexes;
    console.log("random indexes", randomIndexes);
    return randomIndexes;
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
      <div>{generateRandomIndexes(password)}</div>
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
