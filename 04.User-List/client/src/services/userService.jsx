const baseURL = `http://localhost:3900/jsonstore/users`;

export const getAll = async () => {
    const response = await fetch(baseURL);
    const result = await response.json();
    const data = Object.values(result);
    console.log(data)
    return data;
}

export const createUser = async (data) => {
    const body = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        imageUrl: data.imageUrl,
        address: {
            country: data.country,
            city: data.city,
            street: data.street,
            streetNumber: data.streetNumber,
        }
    }
    const response = await fetch(baseURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    const result = await response.json();

    return result;
}

export const getUser = async (userId) => {
    const response = await fetch(`${baseURL}/${userId}`);
    const result = await response.json();    
    return result;
}

export const deleteUser = async (userId) =>{
    const response = await fetch(`${baseURL}/${userId}`, {
        method: 'DELETE', 
    });
    const result = await response.json();
    return result;
}
