const {Activity} = require('../db');

async function createActivity(body) {
    try{
        const {id, name, difficult, duration, season, country} = body
        console.log(body)
        const [newActivity, created] = await Activity.findOrCreate({
            where: {id: id, name: name},
            defaults: {difficult, duration, season}
        })
        if(created) {
            for (let i = 0; i < country.length; i++) {
                await newActivity.addCountry(country[i])
            }
            return newActivity
        }
    } catch (error) {
        return error
    }
}

module.exports = createActivity