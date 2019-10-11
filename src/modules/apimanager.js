let url = "http://localhost:8088"

export default {
    post(resource, newObj){
        return fetch(`${url}/${resource}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newObj)
            }).then(newObj => newObj.json())
          },

    getAll(resource){
        return fetch(`${url}/${resource}`).then(newObj => newObj.json())
    },
    getAll(resource, obj){
        return fetch(`${url}/${resource}`).then(newObj => newObj.json())
    },
    delete(resource, id){
        return fetch(`${url}/${resource}/${id}`,{
            method: "DELETE",
        }).then(newObj => newObj.json())
    },
    put(resource, editObj){
        return fetch(`${url}/${resource}/${editObj.id}`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editObj)
            }).then(editObj => editObj.json())
    },
    get(resource, id){
        return fetch(`${url}/${resource}/${id}`).then(newObj => newObj.json())
    }
    get(resource, friendsName){
        return fetch(`${url}/friends?name=${friendsName}`).then(newObj => newObj.json())
    }
}