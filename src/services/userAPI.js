const BASE_URL = 'http://localhost:4000/api/users';

export const usersServices = async (endpoint = "", data, method = 'GET') => {
    if(method === "GET"){
        const resp = await fetch(`${BASE_URL}/${endpoint}`);
        const results = await resp.json();

        return results;
    }else{
        const resp = await fetch(`${BASE_URL}/${endpoint}`, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data) 
        });
        const results = await resp.json();
        
        return results;
    }

    // if(method === "POST"){
    // }

    // if(method === "DELETE"){
    //     const resp = await fetch(`${BASE_URL}/${endpoint}`, {
    //         method,
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: data
    //     });
    //     const results = await resp.json();
    //     console.log(results);

    //     return results;
    // }
};