const uniqid = require('uniqid');

module.exports = class Store {
    constructor(storeName) {
        this.storeName = storeName;
        this.contents = [];
    }

    save(data) {
        const newEntry = {};
        for(let prop in data) {
            newEntry[prop] = data[prop];
        }

        newEntry._id = uniqid();
        this.contents.push(newEntry);

        return newEntry;
    }

    get(id) {
        let foundEntry = null;

        for(let i = 0; i < this.contents.length; i++) {
            if(this.contents[i]._id === id) {
                foundEntry = this.contents[i];
                break;
            }
        }

        return foundEntry;
    }

    getAll() {
        const fullContents = this.contents.slice();

        return fullContents;
    }

    remove(id) {
        let success = { removed: false };

        for(let i = 0; i < this.contents.length; i++) {
            if(this.contents[i]._id === id) {
                this.contents.splice(i, 1);
                success = { removed: true };
                break;
            }
        }

        return success;
    }
};