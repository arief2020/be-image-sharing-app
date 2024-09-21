const express = require("express");
const LikeController = require("../controllers/like.controller");

const router = express.Router();

router.get('/', LikeController.findAll),

router.get('/:id', LikeController.findById),

router.post('/', LikeController.create),

router.delete('/:id', LikeController.destroy),

module.exports = router;
