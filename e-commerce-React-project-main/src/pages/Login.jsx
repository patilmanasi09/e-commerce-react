import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();

    const storedData = JSON.parse(localStorage.getItem("loginData"));

    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    if (storedData && storedData.email === email && storedData.password === password) {
      navigate("/dashboard");
    } else if (storedData && storedData.email === email && storedData.password !== password) {
      alert("Invalid credentials");
    } else {
      alert("User not found");
    }
  }
  return (
    <div className="container mt-5 w-50 h-75 p-5 border border-1 rounded" style={{ backgroundColor: "rgb(241, 248, 145)", color: "white" }}>
      <h3 className="text-center" style={{ color: "#FFD700)" }}>Login</h3>
      <form>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label " style={{ color: "#FFD700" }}>Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email}
            onChange={(e) => setEmail(e.target.value)} />

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputUsername" className="form-label" style={{ color: "#FFD700" }}>Username</label>
          <input type="text" className="form-control" id="exampleInputUsername" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label" style={{ color: "#FFD700" }}>Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="btn  mt-2" onClick={handleLogin} style={{ backgroundColor: "#FFD700" }}>Login</button>

      </form>
      <p className="text-center" style={{ color: "#FFD700" }}>
        Not registered?{" "}
        <span
          style={{ color: "#FFD700", cursor: "pointer" }}
          onClick={() => navigate("/register")}
        >
          Register
        </span>
      </p>
    </div>
  );
}

export default Login;
