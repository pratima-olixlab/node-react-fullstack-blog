const express = require('express');
const router = express.Router();

const upload = require('../middleware/upload');

const ctrlUser = require('../controllers/userController');

router.post('/register', ctrlUser.register);
router.post('/login', ctrlUser.login);
router.post('/category', upload.single('cover'), ctrlUser.postCategory);
router.post('/blog', upload.single('cover'), ctrlUser.postBlog);
router.get('/blog', ctrlUser.getBlog);
router.get('/category', ctrlUser.getCategory);
router.get('/blog/:id', ctrlUser.getBlogById);
router.get('/category/:id', ctrlUser.getCategoryById);
router.delete('/blog/:id', ctrlUser.deleteBlogById);
router.delete('/category/:id', ctrlUser.deleteCategoryById);
router.put('/blog/:id', upload.single('cover'), ctrlUser.editBlogById);
router.put('/:id', ctrlUser.updateUser);
router.post('/blog/:id/comment', ctrlUser.postComment);
router.get('/blog/:id/comments', ctrlUser.getCommentsByBlogId);
router.put('/category/:id', upload.single('cover'), ctrlUser.editCategoryById);

module.exports = router;