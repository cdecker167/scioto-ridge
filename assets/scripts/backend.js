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