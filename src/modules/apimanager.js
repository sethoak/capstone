let url = "http://localhost:8088";

export default {
  post(resource, newObj) {
    return fetch(`${url}/${resource}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    }).then(newObj => newObj.json());
  },
  patch(resource, newObj, id) {
    return fetch(`${url}/${resource}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObj)
    }).then(newObj => newObj.json());
  },
  getAllSunglasses(resource, id) {
    return fetch(`${url}/${resource}/${id}`).then(newObj => newObj.json());
  },
  getSunglass(resource) {
    return fetch(`${url}/${resource}`).then(newObj => newObj.json());
  },
  getAll(resource, obj) {
    return fetch(`${url}/${resource}`).then(newObj => newObj.json());
  },
  delete(resource, id) {
    return fetch(`${url}/${resource}/${id}`, {
      method: "DELETE"
    }).then(newObj => newObj.json());
  },
  put(resource, editObj) {
    return fetch(`${url}/${resource}/${editObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editObj)
    }).then(editObj => editObj.json());
  },
  get(id) {
    return fetch(`${url}/products/${id}`).then(result => result.json());
  },
  getHeadShot(id) {
    return fetch(`${url}/users/${id}`).then(result => result.json());
  },
  getHeadShotID(resource, id) {
    return fetch(`${url}/${resource}/${id}&_expand=headShape`).then(result =>
      result.json()
    );
  }
};
