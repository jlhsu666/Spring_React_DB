import React, { useState, useEffect } from 'react';
import UserService from './UserService';

function UserForm({ selectedUser, onSave }) {
    const [user, setUser] = useState({ name: '', email: '' });

    useEffect(() => {
        if (selectedUser) {
            setUser(selectedUser);
        } else {
            setUser({ name: '', email: '' });
        }
    }, [selectedUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({ ...prevUser, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user.id) {
            UserService.updateUser(user.id, user).then(() => onSave());
        } else {
            UserService.createUser(user).then(() => onSave());
        }
    };

    return (
        <div>
            <h2>{user.id ? 'Edit User' : 'Add User'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={user.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={user.email} onChange={handleChange} />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default UserForm;
