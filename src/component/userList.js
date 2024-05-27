import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div className="space-y-4">
      {users.map((user) => (
        <div key={user.id} className="bg-gray-100 p-4 rounded-md flex justify-between items-center">
          <span className="text-lg">{user.name}</span>
          <div className="space-x-2">
            <button
              onClick={() => onEdit(user)}
              className="bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600"
            >
              {/* Edit */}
              {/* <FontAwesomeIcon icon="fa-regular fa-pen-to-square" /> */}
              Edit
            
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
