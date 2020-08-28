// Import Mongo connection packages
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const {ObjectId} = require('mongodb');

// Setup database object
const url = process.env.DB_URL
const db_name = process.env.DB_NAME;
const col1_name = process.env.COL1_NAME;
const col2_name = process.env.COL2_NAME;
const options = {
    useUnifiedTopology: true
}

// Setup encryption process
const bcrypt = require('bcrypt');

// Create an event
const createEvent = (event) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col2_name);
            collection.insertOne(event, (err, result) => {
                assert.equal(err, null);
                resolve(result.ops[0]);
                client.close();
            });
        });
    });
    return iou;
}

// Retrieve all events for a specific user
const getEvents = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col2_name);
            collection.find({userId: id}).toArray((err, docs) => {
                assert.equal(err, null);
                resolve(docs);
                client.close();
            });
        });
    });
    return iou;
}

// Update an event for a specific user
const updateEvent = (id, event) => {
    const iou =  new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col2_name);
            collection.findOneAndUpdate(
                {_id: new ObjectId(id)},
                {$set: {...event}},
                (err, result) => {
                    assert.equal(err, null);
                    resolve(result.value);
                    client.close();
                }
            );
        });
    });
    return iou;
}

// Verify token
const verifyToken = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col2_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                resolve(docs.some(doc => doc.userId === id))
                client.close();
            });
        });
    });
    return iou;
}

// Delete an event
const deleteEvent = (id) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col2_name);
            collection.findOneAndDelete({_id: new ObjectId(id)}, (err, result) => {
                assert.equal(err, null);
                resolve(result.value);
                client.close();
            });
        });
    });
    return iou;
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent,
    verifyToken
}