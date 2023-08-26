const { Router } = require("express");
const {getAllCountries, getCountryId, postActivity, getAllActivities} = require('../controllers')

const router = Router();

router.get('/countries', getAllCountries);
router.get('/countries/:id', getCountryId);
router.post('/activities', postActivity);
router.get('/activities', getAllActivities);

module.exports = router;
