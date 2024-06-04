import React, { useState, useEffect } from 'react';

const UserForm = ({ onCreate, onUpdate, selectedUser}) => {
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setError('');
    } else {
      setName('');
      setError('');
    }
  }, [selectedUser]);

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
    setError('');
    if (selectedUser) {
      await onUpdate({ ...selectedUser, name });
    } else {
      await onCreate({ name });
    }
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 mr-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white p-2">
        {selectedUser ? 'Update User' : 'Add User'}
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </form>
  );
};

export default UserForm;
