var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

const {
  getEvents,
  createEvent
} = require('../../data/events');

// GET user's events
router.get('/', async (req, res, next) => {
  const id = req.header('id');
  const response = await getEvents(id);
  res.send(response);
})

// POST new event
router.post('/', async (req, res, next) => {
  const body = req.body;
  const response = await createEvent(body);
  res.send(response);
})

module.exports = router;
