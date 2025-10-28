import React, { useState } from "react";

export default function () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit() {
    console.log(email, password);
  }
  function handleEmail(e) {
    // console.log(e.target.value);
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    // console.log(e.target.value);
    setPassword(e.target.value);
  }
  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email"
        name="email"
        onChange={handleEmail}
      />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        onChange={handlePassword}
      />
      <button onClick={handleSubmit}>Click</button>
    </div>
  );
}
