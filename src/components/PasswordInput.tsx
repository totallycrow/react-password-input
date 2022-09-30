import React, { useEffect, useMemo, useState } from "react";
import "./PasswordInput.css";
import useGenerateRandomIndexes from "../hooks/useGenerateRandomIndexes";

export default function PasswordInput({ password, onSuccess }: any) {
  const [formInput, setFormInput] = useState([]);

  const [indexesToCompare, specifiedPasswordChars, passwordChars] =
    useGenerateRandomIndexes(password);

  useEffect(() => {
    const specifiedInputChars = indexesToCompare.map(
      (index: number) => formInput[index]
    );

    if (
      JSON.stringify(specifiedPasswordChars) ===
      JSON.stringify(specifiedInputChars)
    )
      alert("correct");
  }, [formInput, indexesToCompare, specifiedPasswordChars]);

  console.log(formInput);
  return (
    <div>
      <h1>PasswordInput</h1>
      <div>{password}</div>
      <div>{indexesToCompare}</div>
      <div>{specifiedPasswordChars}</div>

      <div>
        {passwordChars.map((item: any, index: number) => {
          if (indexesToCompare.includes(index)) {
            return (
              <input
                maxLength={1}
                className="input-item active"
                onChange={(e) => {
                  const newState = [...formInput];

                  // @ts-ignore
                  newState[index] = e.target.value;
                  setFormInput(newState);
                }}
              ></input>
            );
          }
          return (
            <input
              maxLength={1}
              className="input-item inactive"
              disabled
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
