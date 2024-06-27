class User {
    constructor(id, username, email) {
        this.id = id;
        this.username = username;
        this.email = email;
    }

    getId() {
        return this.id;
    }

    getUsername() {
        return this.username;
    }

    getEmail() {
        return this.email;
    }

    setId(id) {
        this.id = id;
    }

    setUsername(username) {
        this.username = username;
    }

    setEmail(email) {
        this.email = email;
    }

    static async getUsers() {
        const response = await fetch('/api/users');
        return response.json();
    }

    static async addUser(userData) {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });
        return response.json();
    }


    

}
