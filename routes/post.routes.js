const router = require("express").Router();
const postsController = require("../controllers/post.controller");

router.get("/", postsController.getAllPosts);
router.get("/:id", postsController.getPost);
router.post("/", postsController.addPost);
router.put("/:id", postsController.updatePost);
router.delete("/:id", postsController.deletePost);

module.exports = router;
