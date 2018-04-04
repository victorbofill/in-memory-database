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

    // getAll() {

    // retrieve the contents of the store
    // return the contents of the store

    // }

    // remove() {

    // identify something in the store by id
    // remove the thing from the store

    // }
};