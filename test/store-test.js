const assert = require('assert');
const Store = require('../lib/store');

describe('STORE TESTS', () => {

    let characters = new Store('My Characters');
    let ids = [];
    
    it('.save: saved Thargor with id', () => {
        const newEntry = characters.save({ name: 'Thargor', class: 'barbarian' });

        assert(newEntry.hasOwnProperty('_id'), true);

        ids.push(newEntry._id);
    });

    it('.save: saved Tim with id', () => {
        const newEntry = characters.save({ name: 'Tim', class: 'enchanter' });

        assert(newEntry.hasOwnProperty('_id'), true);

        ids.push(newEntry._id);
    });

    it('.save: saved Barbara with id', () => {
        const newEntry = characters.save({ name: 'Barbara', class: 'musician' });

        assert(newEntry.hasOwnProperty('_id'), true);

        ids.push(newEntry._id);
    });

    it('.get: successful retrieval', () => {
        const retrievedEntry = characters.get(ids[0]);

        assert(retrievedEntry._id, characters.contents[0]._id);
    });

    it('.get: successfully returning "null" on non-entry', () => {
        const retrievedEntry = characters.get('asdf');

        assert.deepEqual(retrievedEntry, null);
    });

    it('.getAll: successfully runs', () => {
        const contentsTest = characters.getAll();

        assert.deepEqual(characters.contents, contentsTest);
    });

    it('.remove: removal successful', () => {
        const removingId = characters.contents[0]._id;
        const success = characters.remove(removingId);

        assert.deepEqual(success, { removed: true });
    });

    it('.remove: successful non-removal of entry', () => {
        const removingId = 'asdf';
        const success = characters.remove(removingId);

        assert.deepEqual(success, { removed: false });
    });
});