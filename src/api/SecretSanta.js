// import auth 
const baseUrl = 'http://localhost:3977/';

export const getSectretSantaList = id =>{
    let query = id ? `?id=${id}` : ''
    console.log(query) 
    return fetch(`${baseUrl}get/${query}`).then(res=>res.json())
}