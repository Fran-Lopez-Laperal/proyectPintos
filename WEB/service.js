export const loginUserService = async ({ email, password }) => {
    const response = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};



export const getMyUserDataService = async ({ token }) => {
    const response = await fetch(`http://localhost:3000/users`, {
        headers: {
            Authorization: token,
        },
    });

    const json = await response.json();
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};

export const createNewService = async ({ token }) => {
    const response = await fetch(`http://localhost:3000/criarNoticia`, {
        method: "POST",
        headers: {
            Authorization: token,
        },

    });

    const json = await response.json();
    console.log(json)
    if (!response.ok) {
        throw new Error(json.message);
    }

    return json.data;
};


export const getNewsService = async () => {
    const response = await fetch(`http://localhost:3000/noticias`, {
        method:"GET"
    })

    const json = await response.json()

    if(!response.ok){
        throw new Error(json.message)
    }
    console.log(json.data)
    return json.data.allNews
}

