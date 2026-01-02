import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Main.css';
import { getAllCustomers } from '../service/api';

const CustomerList = () => {
    const[customer, setCustomer]=useState([]);
    useEffect(()=>{
   fetchCustomer();
    },[])
 const navigate = useNavigate()
    const fetchCustomer=()=>{
        getAllCustomers()
    .then(res => setCustomer(res.data))
    }

    // const handledelete=(id)=>{
    //     deleteUserById(id) ;
    //     console.log("User deleted");
    //     fetchUsers();
    // }

    
  return (
    
    <>
    <h2>Customer List</h2>
    
    <table>
        <thead><tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>City</th>
            <th>Action</th>
            </tr></thead>
          <tbody>
            {
                customer.map(( item)=>(
                    <tr key ={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>{item.city}</td>
                <td>
                    <button onClick={()=>navigate(`/update/${item.id}`)}>Update</button>
                    {/* <button onClick={()=>handledelete(item.id)}>Delete</button> */}
                </td>
                    </tr>
                ))

            }
          </tbody>

    </table>
    </>
  )
}

export default CustomerList
