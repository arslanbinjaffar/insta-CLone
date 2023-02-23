const express = require('express')
const { createPost, getAllPosts, likePost, unlikePost, savePost, 
    unSavePost, addComment, getAllComments, deleteComment } = require('../../controllers/postController')
const requireLogin = require('../../middleware/requireLogin')
const postRouter = express.Router()


postRouter.post("/createpost",requireLogin,createPost)
postRouter.get("/allpost",requireLogin,getAllPosts)

postRouter.put('/like',requireLogin,likePost)
postRouter.put('/unlike',requireLogin,unlikePost)

postRouter.put('/saved',requireLogin, savePost)
postRouter.put('/unsaved',requireLogin, unSavePost)

//comments route

postRouter.put('/createComment',requireLogin,addComment)
postRouter.get('/allcomments',requireLogin,getAllComments)
postRouter.put('/deleteComment',requireLogin,deleteComment)

module.exports = postRouter