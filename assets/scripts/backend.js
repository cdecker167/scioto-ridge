/*This file creates a wrapper class around the backend API, which shortens the syntax
for fetch requests and such. Ended up being quite useful, especially for 
POST requests */

export class Backend {
    constructor() {
        this.baseUrl = "";
    }
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    getBaseUrl() {
        return this.baseUrl;
    }
    get(endpoint) {
        return fetch(`${this.baseUrl}${endpoint}`,{credentials: 'include'})
        .then(response => response.json());
    }
    post(endpoint, data) {
        return fetch(`${this.baseUrl}${endpoint}` , {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json());
    }
}

/*The API returns JSON data, so we can return response.json() here for good measure. */