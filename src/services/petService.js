const url = `http://localhost:3000/pets`;

export const getAll = (category = '') => {

    let petsUrl = url + ((category && category !== 'all') ? `?category=${category}` : '');

    return fetch(petsUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
}


export const getOne = (petId) => {
    return fetch(`${url}/${petId}`)
        .then(res => res.json())
        .catch(err => console.log(err));
}