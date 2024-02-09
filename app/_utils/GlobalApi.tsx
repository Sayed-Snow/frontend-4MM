
import axios from "axios";

const apiUrl = 'https://swapi.dev/api/'

const axiosClient = axios.create({
    baseURL: apiUrl,
})

async function searchCharacters (input:string){
    const result = axiosClient.get(`/people/?search=${input}`).then(resp => resp.data).then(res => res.results)
    return result
}

export{
    searchCharacters
}