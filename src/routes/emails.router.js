const { send, contact } = require('../controllers/emails.controllers');
const express = require('express');

const emailRouter = express.Router();

emailRouter.route("/send").post(send);
emailRouter.route("/contact").post(contact);

module.exports = emailRouter;