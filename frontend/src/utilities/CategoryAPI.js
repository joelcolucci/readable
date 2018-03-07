const api = process.env.READABLE_API_URL || 'http://localhost:3001';


let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  'Accept': 'application/json',
  'Authorization': token
};


/**
 *
 * @return {Promise}
 */
function getAll() {
  let endpoint = `${api}/categories`;
  let options = {
    headers
  };

  return fetch(endpoint, options)
    .then((response) => response.json())
    .then((response) => response.categories);
}

export {
  getAll
};
