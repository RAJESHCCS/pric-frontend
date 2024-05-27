const API_URL = 'http://localhost:4000';  // Update this to your actual API endpoint if different

export const fetchUsers = async () => {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
};

export const createUser = async (user) => {
    await fetch(`${API_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
};

export const updateUser = async (user) => {
    await fetch(`${API_URL}/users/${user.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
};

export const deleteUser = async (id) => {
    await fetch(`${API_URL}/users/${id}`, {
        method: 'DELETE',
    });
};
