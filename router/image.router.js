const express = require("express");
const ImageController = require("../controllers/image.controller");

const router = express.Router();

router.get('/', ImageController.findAll),

router.get('/:id', ImageController.findById),

router.get('/user/:user_id', ImageController.findByUserId),

router.get('/tag/:tag_id', ImageController.findByTagId),

router.get('/me', ImageController.findMyImage),

router.post('/', ImageController.create),

router.put('/:id', ImageController.update),

router.delete('/:id', ImageController.destroy),

module.exports = router;
