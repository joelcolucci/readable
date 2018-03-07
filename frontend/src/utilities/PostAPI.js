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
 * @param {Object} body
 * @return {Promise}
 */
function create(body) {
  let endpoint = `${api}/posts`;
  let options = {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  };

  return fetch(endpoint, options)
    .then((response) => response.json());
}


/**
 *
 * @return {Promise}
 */
function getAll() {
  let endpoint = `${api}/posts`;
  let options = {
    headers
  };

  return fetch(endpoint, options)
    .then((response) => response.json());
}


/**
 *
 * @param {String} postId
 * @return {Promise}
 */
function get(postId) {
  let endpoint = `${api}/posts/${postId}`;
  let options = {
    method: 'GET',
    headers
  };

  return fetch(endpoint, options)
    .then((response) => response.json());
}


/**
 *
 * @param {Object} postId
 * @return {Promise}
 */
function remove(postId) {
  let endpoint = `${api}/posts/${postId}`;
  let options = {
    method: 'DELETE',
    headers
  };

  return fetch(endpoint, options)
    .then((response) => response.json());
 }


export {
  create,
  getAll,
  get,
  remove
};
