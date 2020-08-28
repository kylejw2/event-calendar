var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const {
  getEvents,
  createEvent,
  updateEvent
} = require('../../data/events');

// GET user's events
router.get('/', async (req, res, next) => {
  const token = req.header('auth');
  if (token) {
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    const response = await getEvents(decoded.id);
    for (let i = 0; i < response.length; i++) {
      delete response[i].userId;
    }
    res.send(response);
  } else {
    res.status(403).send();
  }
  
})

// POST new event
router.post('/', async (req, res, next) => {
  const token = req.header('auth');
  if (token) {
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    const body = req.body;
    req.body.userId = decoded.id;
    const response = await createEvent(body);
    delete response.userId;
    res.send(response);
  } else {
    res.status(403).send();
  }
})

// PATCH an existing event
router.patch('/', async (req, res, next) => {
  const token = req.header('auth');
  if (token) {
    const decoded = await jwt.verify(token, process.env.JWT_KEY);
    const body = req.body;
    req.body.userId = decoded.id;
    const id = body._id;
    delete body._id;
    const response = await updateEvent(id, body);
    delete response.userId;
    res.send(response);
  } else {
    res.status(403).send();
  }
});

module.exports = router;
