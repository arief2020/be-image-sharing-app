const express = require("express");
const TagController = require("../controllers/tag.controller");

const router = express.Router();

router.get('/', TagController.findAll),

router.get('/:id', TagController.findById),

router.post('/', TagController.create),

router.put('/:id', TagController.update),

router.delete('/:id', TagController.destroy),

module.exports = router;
