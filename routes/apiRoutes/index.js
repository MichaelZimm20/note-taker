const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteTakerRoutes');

router.use(noteRoutes);


module.exports = router;