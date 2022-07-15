const router = require("express").Router();
const {listAll,onePost, addOne, deletePost, editOne} = require("./postController");
// const isAuth = require("../middlewares/isAuth");
const validatiorCreatePost = require("../validators/posts");
const uploadFile = require("../utils/handleStorage")

router.get("/", listAll)

router.post("/",uploadFile.single("file"), addOne)

router.get("/:id", onePost)

router.delete("/:id", deletePost)

router.patch("/:id",uploadFile.single("file"),editOne)

module.exports = router