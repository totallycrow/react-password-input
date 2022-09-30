import React, { useEffect, useMemo, useState } from "react";
import "./PasswordInput.css";
import useGenerateRandomIndexes from "../hooks/useGenerateRandomIndexes";

type PassProps = {
  password: string;
  onSuccess: Function;
};

export default function PasswordInput({ password, onSuccess }: PassProps) {
  const [formInput, setFormInput] = useState(Array<string>);

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
      onSuccess();
  }, [formInput, indexesToCompare, specifiedPasswordChars, onSuccess]);

  console.log(formInput);
  return (
    <div>
      <h1>PasswordInput</h1>
      <div>{password}</div>
      <div>{indexesToCompare}</div>
      <div>{specifiedPasswordChars}</div>

      <div>
        {passwordChars.map((item: string, index: number) => {
          if (indexesToCompare.includes(index)) {
            return (
              <input
                maxLength={1}
                className="input-item active"
                onChange={(e) => {
                  const newState = [...formInput];

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
