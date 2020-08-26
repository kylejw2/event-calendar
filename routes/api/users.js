var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const {
  verifyUser,
  createUser,
  verifyEmail
} = require('../../data/users');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// CREATE a user
router.post('/register', async (req, res, next) => {
  const body = req.body;
  const response = await verifyEmail(body.email);
  if (response) {
    const data = await createUser(body);
    const token = await jwt.sign({id: data._id}, process.env.JWT_KEY);
    res.set('auth', token);
    res.set('id', data._id);
    res.set('Access-Control-Expose-Headers', 'auth');
    res.send();
  } else {
    res.status(401).send();
  }
});

// Log in
router.post('/login', async (req, res, next) => {
  const body = req.body;
  const response = await verifyUser(body.email, body.password);
  if (response) {
    const token = await jwt.sign({id: response}, process.env.JWT_KEY);
    res.set('auth', token);
    res.set('Access-Control-Expose-Headers', 'auth');
    res.send();
  } else {
    res.status(401).send();
  }
});

module.exports = router;
