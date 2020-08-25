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
const salt = 10;

// VERIFY a user
const verifyUser = (email, password) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col1_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                for (let i = 0; i < docs.length; i++) {
                    if (email === docs[i].email && bcrypt.compareSync(password, docs[i].password)) {
                        resolve(docs[i]._id);
                        break;
                    } if (i === docs.length - 1) {
                        resolve(false);
                    }
                }
                client.close();
            });
        });
    });
    return iou;
}

// CREATE a user
const createUser = (user) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col1_name);
            collection.insertOne(user, (err, result) => {
                assert.equal(err, null);
                resolve(result.ops);
                client.close();
            });
        });
    });
    return iou;
}

// VERIFY email
const verifyEmail = (email) => {
    const iou = new Promise((resolve, reject) => {
        MongoClient.connect(url, options, (err, client) => {
            assert.equal(err, null);
            const db = client.db(db_name);
            const collection = db.collection(col1_name);
            collection.find({}).toArray((err, docs) => {
                assert.equal(err, null);
                for (let i = 0; i < docs.length; i++) {
                    if (docs[i].email === email) {
                        resolve(true);
                        break;
                    }
                    if (i === docs[i].length - 1) {
                        resolve(false);
                    }
                }
                client.close();
            });
        });
    });
    return iou;
}

module.exports = {
    verifyUser,
    createUser,
    verifyEmail
}