const express = require("express");
const ImageTagController = require("../controllers/imageTag.controller");

const router = express.Router();

router.get('/', ImageTagController.findAll),

router.get('/:id', ImageTagController.findById),

router.post('/', ImageTagController.create),

router.put('/:id', ImageTagController.update),

router.delete('/:id', ImageTagController.destroy),

module.exports = router;
