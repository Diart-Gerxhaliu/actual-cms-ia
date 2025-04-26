import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    if (name === "admin" && password === "admin") {
      window.location.href='/admin/dashboard'
      localStorage.setItem("admin", true);
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="login">
      <input
        type="text"
        name="name"
        placeholder="Username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        
      />
      <button type="button" onClick={submitForm}>
        Submit
      </button>
    </div>
  );
}

export default Login;
