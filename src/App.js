import React, { useState } from 'react';
import './App.css';  // 引入樣式
import UserList from './UserList';
import UserForm from './UserForm';

function App() {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleEditUser = (user) => {
        setSelectedUser(user);
    };

    const handleSave = () => {
        setSelectedUser(null); // 清空選取的使用者
    };

    return (
        <div className="App">
            <div className="container">
                <h1>User Management</h1>
                <UserList onEditUser={handleEditUser} />
                <UserForm selectedUser={selectedUser} onSave={handleSave} />
            </div>
        </div>
    );
}

export default App;
