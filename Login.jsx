import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsers } from "../service/api";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // CALL the API function properly
      const res = await getAllUsers();

      const allUsers = res.data;   // this IS the array

      // find matching user
      const foundUser = allUsers.find(
        (u) => u.email === user.email && u.password === user.password
      );

      if (!foundUser) {
        alert("Invalid Email or Password!");
        return;
      }

      alert("Login Successful!");

      // redirect based on actual stored role
      if (foundUser.role === "ROLE_USER") {
        navigate("/udashboard");
      } else {
        navigate("/customerdashboard");
      }

    } catch (error) {
      console.error("Login Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div style={{ width: "400px",margin: "137px auto"}} >
      <form onSubmit={handleLogin} >
        <h2>Login Here</h2>
        Email:<input
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
        />
        <br></br>

        Password:<input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit" style={{ backgroundColor: "green", color: "white" }}>
          Login
        </button><br></br>
        New User? <a href="/register">Register</a> Here
      </form>
    </div>
  );
};

export default Login;
