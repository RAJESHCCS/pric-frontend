import React, { useEffect, useState } from 'react';
import { fetchUsers, createUser, updateUser, deleteUser,clearUser} from '../api/user';
import UserForm from './userForm';
import UserList from './userList';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // loadUsers();
    clearUser();
  }, []);

  const loadUsers = async () => {
    const fetchedUsers = await fetchUsers();
    setUsers(fetchedUsers);
  };

  const handleCreate = async (user) => {
    await createUser(user);
    loadUsers();
  };

  const handleUpdate = async (user) => {
    await updateUser(user._id, user);
    loadUsers();
    setSelectedUser(null);
  };

  const handleDelete = async (id) => {
    console.log(`Deleting user with id: ${id}`);
    await deleteUser(id);
    loadUsers();
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <UserForm onCreate={handleCreate} onUpdate={handleUpdate} selectedUser={selectedUser} />
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
