 const endpoint = (limit,offset) =>{
    return (`products?limit=${limit}&offset=${offset}`);
}; 

export {endpoint};

