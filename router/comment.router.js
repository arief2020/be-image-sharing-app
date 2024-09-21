const express = require("express");
const CommentController = require("../controllers/comment.controller");

const router = express.Router();

router.get('/', CommentController.findAll),

router.get('/:id', CommentController.findById),

router.get('/image/:image_id', CommentController.findByImageId),

router.post('/', CommentController.create),

router.put('/:id', CommentController.update),

router.delete('/:id', CommentController.destroy),

module.exports = router;
