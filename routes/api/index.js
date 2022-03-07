const router = require('express').Router();
//comment routes to user routes
const userRoutes = require('./user-routes');
//pizza to thought
const thoughtRoutes = require('./thought-routes');

//comments to users
router.use('/users', userRoutes);
//thoughts to pizza
router.use('/thoughts', thoughtRoutes);

module.exports = router;