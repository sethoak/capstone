let url = "http://localhost:3000"

export default {
    post(resource, newObj){
        return fetch(`${url}/${resource}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(newObj)
            }).then(newObj => newObj.JSON())
          }
}