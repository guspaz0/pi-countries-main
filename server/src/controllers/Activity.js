const {createActivity, allActivities} = require('../services')

async function postActivity(req,res) {
    try{
        const create = await createActivity(req.body)
        if(create) {
            res.status(201).json(create)
        }
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

async function getAllActivities(req,res) {
    try {
        const Activity = await allActivities()
        res.status(200).json(Activity)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    postActivity,
    getAllActivities
}