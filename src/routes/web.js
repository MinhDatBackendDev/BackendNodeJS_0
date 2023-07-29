const express = require('express');
const router = express.Router();
const { getHomepage, getABC, getTMD } = require('../controllers/homeController');

//khai bao route
//route.Method('/route', handler)
//xu ly data (tuong dong voi controller)
router.get('/', getHomepage);

router.get('/abc', getABC);

// res.send('<h1>Truong Minh Dat</h1>')
router.get('/tmd', getTMD);

module.exports = router;