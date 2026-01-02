import { useState } from 'react'
import { FaUsers } from "react-icons/fa"
import { FaPhone } from 'react-icons/fa6'
import { MdEmail, MdLocationCity } from 'react-icons/md'
import { TbPasswordMobilePhone } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import '../CSS/Main.css'
const AddCustomers = ()  => {

  const[user, setUser] = useState({
    name:" ",
    email:" ",
    contact:" ",
    city:" ", 
    password :" "
  })
  const navigate = useNavigate()
  const handleChange=(e)=>{
   setUser({...user ,[e.target.name]: e.target.value})
   
  }
  return ( 
    <>
    
    <form action="">
    <h2>Registration Here!</h2>
      <FaUsers />: <input type="text" placeholder='enter name here'  name="name" onChange={handleChange} required/>
      <br />
     <MdEmail style={{}} />:<input type="email" placeholder='enter email here'  name="email" onChange={handleChange} required/>
      <br />
     <FaPhone />:<input type="phone" placeholder='enter phone here'  name="contact" onChange={handleChange} required/>
      <br />
     <MdLocationCity />:<input type="text" placeholder='enter name here'  name="name" onChange={handleChange} required/>
      <br />
     <TbPasswordMobilePhone />: <input type="password" placeholder='enter name here'  name="name" onChange={handleChange} required/>
      <br />
      <p>Alredy Registered ! <button onClick={()=>navigate("/")}>Login here</button></p>
      <button style={{backgroundColor:"blue"}}>Register</button>
      <button>Login</button>
      <br />
    </form>
    </>
  )
}

export default AddCustomers