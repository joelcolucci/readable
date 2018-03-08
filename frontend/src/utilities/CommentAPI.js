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
  let endpoint = `${api}/comments`;
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
 * @param {String} postId
 * @return {Promise}
 */
function getAllForPost(postId) {
  let endpoint = `${api}/posts/${postId}/comments`;

  let options = {
    headers
  };

  return fetch(endpoint, options)
    .then((response) => response.json());
}


/**
 *
 * @param {String} commentId
 * @return {Promise}
 */
function get(commentId) {
  let endpoint = `${api}/comments/${commentId}`;
  let options = {
    method: 'GET',
    headers
  };

  return fetch(endpoint, options)
    .then((response) => response.json());
}


/**
 *
 * @param {Object} body
 * @return {Promise}
 */
function update(body) {
  let endpoint = `${api}/comments/${body.id}`;
  let options = {
    method: 'PUT',
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
 * @param {Object} commentId
 * @return {Promise}
 */
function remove(commentId) {
  let endpoint = `${api}/comments/${commentId}`;
  let options = {
    method: 'DELETE',
    headers
  };

  return fetch(endpoint, options)
    .then((response) => response.json());
 }


/**
 *
 * @param {Object} body
 * @return {Promise}
 */
function updateVote(body) {
  let endpoint = `${api}/comments/${body.commentId}`;
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

export {
  create,
  getAllForPost,
  get,
  update,
  remove,
  updateVote
};
