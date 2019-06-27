import axios from 'axios';

export default {
  fetchNotes() {
    return ajax('api/v1/notes', 'get', null, null);
  }
};

/**
 * @param url
 * @param method
 * @param params
 * @param data
 * @returns
 */
function ajax(url, method, params, data) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      params,
      data
    }).then(res => resolve(res), res => reject(res));
  })
}
