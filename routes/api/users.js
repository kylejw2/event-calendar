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
router.post('/', async (req, res, next) => {
  const body = req.body;
  const response = await verifyEmail(body.email);
  if (response) {
    const data = await createUser(body);
    const token = await jwt.sign({id: data._id}, process.env.JWT_KEY);
    res.send(token);
  } else {
    res.status(401).send();
  }
})

module.exports = router;
