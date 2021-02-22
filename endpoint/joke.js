const axios = require('axios');

const url = 'https://v2.jokeapi.dev';

/**
 * POST a joke.
 * 
 * @param {Object} document The body of the request (the joke).
 */
let post = async (document) => {
    return axios.post(`${url}/submit`, document)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}

/**
 * GET a random joke.
 */
let get = async () => {
    return axios.get(`${url}/joke/any`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}

/**
 * GET a random joke with spefic params.
 * 
 * @param {string} category The name of the category to send in the request (Any, Misc, Programming, Dark, Pun, Spooky or Christmas). 
 */
let getCategory = async (category) => {
    return axios.get(`${url}/joke/${category}`)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return error.response;
        });
}

module.exports = {
    post,
    get,
    getCategory
}