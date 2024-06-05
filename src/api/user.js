
const API_URL = process.env.REACT_APP_API_URL || 
// 'http://localhost:4000';
'https://pric-backend-app.onrender.com';

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    return response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const clearUser = async () => {
    try {
      const response = await fetch(`${API_URL}/refresh`);
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      return response.json();
    } catch (error) {
      console.error(error);
      return [];
    }
  };




export const createUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Failed to create user');
    }
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = async (userId, user) => {
  try {
    // console.log("this is userId for update line 75", userId);
    // console.log("this is user from wich need to update line 76" ,user)
    // let userdata = 
    const response = await fetch(`${API_URL}/users`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error('Failed to update user');
    }
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = async (username) => {
  try {
    // console.log("this is userId for delete", username);
    const response = await fetch(`${API_URL}/users/${username}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete user');
    }
  } catch (error) {
    console.error(error);
  }
};

