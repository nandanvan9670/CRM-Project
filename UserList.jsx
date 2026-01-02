import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteUserById, getAllUsers } from '../service/api';

const UserList = () => {
    const [user, setUser] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        getAllUsers().then(res => setUser(res.data));
    };

    const handledelete = (id) => {
        deleteUserById(id);
        console.log("User deleted");
        fetchUsers();
    };

    return (
        <>
            {/* ❌ Close Button
            <div
                style={{
                    position: "absolute",
                    top: "15px",
                    right: "20px",
                    fontSize: "25px",
                    cursor: "pointer",
                    fontWeight: "bold"
                }}
                onClick={() => navigate("/udashboard")}
            >
                ❌
            </div> */}
            <h2> User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>City</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {user.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>{item.city}</td>

                            <td>
                                <button onClick={() => navigate(`/update/${item.id}`)}>
                                    Update
                                </button>
                                &nbsp;&nbsp;
                                <button onClick={() => handledelete(item.id)} style={{backgroundColor:"red"}}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UserList;
