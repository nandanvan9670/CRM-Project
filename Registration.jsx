import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../CSS/Main.css'
import { addUser } from '../service/api'

const Registration = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    contact: "",
    city: "",
    password: "",
    role: "ROLE_USER"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    addUser(user)
      .then(res => {
        console.log("Data added", res.data);
        navigate("/");
      })
      .catch(err => {
        console.error("API Error:", err.response?.data || err.message);
      });
  };

  return (
    <div >
    <form onSubmit={handleAdd}>
      <h2>Registration Here!</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        placeholder="Enter name"
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Enter email"
        onChange={handleChange}
        required
      />

      <label>Phone:</label>
      <input
        type="tel"
        name="contact"
        placeholder="Enter phone"
        onChange={handleChange}
        required
      />

      <label>City:</label>
      <input
        type="text"
        name="city"
        placeholder="Enter city"
        onChange={handleChange}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={handleChange}
        required
      />

      <br />

      <label>Role:</label>
      <select name="role" onChange={handleChange} value={user.role}>
        <option value="ROLE_USER">User</option>
        <option value="ROLE_CUSTOMER">Customer</option>
        
      </select>

      <br /><br />

      <button type="submit" style={{ backgroundColor: "blue", color: "white" }}>
        Register
      </button>
      Already Registered!<a href="/"> Login</a> Here
    </form>
    </div>
  );
};

export default Registration;
