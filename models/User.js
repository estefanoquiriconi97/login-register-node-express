const fs = require('fs');

const User = {
    fileName : './database/users.json',

    getData : function() {
        return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
    },

    generateId : function() {
        let allUsers = this.findAll();
        let lastUsers = allUsers.pop();
        if(lastUsers){ 
            return lastUsers.id + 1;
        }
        return 1;
    },

    findAll : function() {
        return this.getData();
    },

    findById : function(id) {
        let allUsers = this.findAll();
        return allUsers.find(user => user.id === id);
    },

    findByEmail : function(email) {
        let allUsers = this.findAll();
        return allUsers.find(user => user.email === email);
    },

    create : function(userData) {
        let allUsers = this.findAll();
        let newUser = {
            id : this.generateId(),
            ...userData
        }
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' '));
        return newUser;
    },

    delete : function(id) {
        let allUsers = this.findAll();
        let finalUsers = allUsers.filter(user => user.id != id);
        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, ' '));
        return true;
    }
}

module.exports = User;