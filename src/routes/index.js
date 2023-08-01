const express = require('express');
const emailRouter = require('./emails.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/emails", emailRouter);

module.exports = router;