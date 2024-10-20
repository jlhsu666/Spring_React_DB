import React, { useEffect, useState } from 'react';
import UserService from './UserService';

function UserList({ onEditUser }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        UserService.getUsers()
            .then(response => setUsers(response.data))
            .catch(error => console.error("Error fetching users:", error));
    };

    const handleDelete = (id) => {
        UserService.deleteUser(id)
            .then(() => loadUsers())
            .catch(error => console.error("Error deleting user:", error));
    };

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <div>
                            <button onClick={() => onEditUser(user)}>Edit</button>
                            <button className="delete" onClick={() => handleDelete(user.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UserList;
