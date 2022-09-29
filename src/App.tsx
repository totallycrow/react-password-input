import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PasswordInput from "./components/PasswordInput";

function App() {
  const onSuccess = () => alert("success");

  return (
    <div>
      <h1>passwordInput</h1>
      <div>
        <PasswordInput password="ABCD1234" onSuccess={onSuccess} />
      </div>
    </div>
  );
}

export default App;
