const router = require('express').Router();
const apiRoutes = require('./api');
//disabling html routes
//const htmlRoutes = require('./html/html-routes');

router.use('/api', apiRoutes);
//disabling html routes
//router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;