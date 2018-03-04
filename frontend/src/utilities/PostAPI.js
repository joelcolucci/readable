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
 * @param {Object} post
 * @return {Promise}
 */
function get(post) {
  let endpoint = `${api}/posts${post.id}`;
  let options = {
    method: 'GET',
    headers: {
      headers
    }
  };

  return fetch(endpoint, options)
    .then((response) => response.json());
}


/**
 *
 * @param {Object} post
 * @return {Promise}
 */
function remove(post) {
  let endpoint = `${api}/posts/${post.id}`;
  let options = {
    method: 'DELETE',
    headers
  };

  return fetch(endpoint, options)
    .then((response) => response.json())
    .then((data) => data.contact);
 }


export {
  create,
  getAll,
  get,
  remove
};