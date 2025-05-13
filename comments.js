// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const Comment = require('./models/comment');
const User = require('./models/user');
const Post = require('./models/post');
const { check, validationResult } = require('express-validator');
const { ObjectId } = mongoose.Types;
const { auth } = require('./middleware/auth');
const { isValidObjectId } = require('mongoose');
const { isAdmin } = require('./middleware/isAdmin');
const { isAuthor } = require('./middleware/isAuthor');
const { isCommentAuthor } = require('./middleware/isCommentAuthor');
const { isPostAuthor } = require('./middleware/isPostAuthor');
const { isUser } = require('./middleware/isUser');
const { isPost } = require('./middleware/isPost');
const { isComment } = require('./middleware/isComment');
const { isUserOrAdmin } = require('./middleware/isUserOrAdmin');
const { isPostOrAdmin } = require('./middleware/isPostOrAdmin');
const { isCommentOrAdmin } = require('./middleware/isCommentOrAdmin');