const {Activity} = require('../db');

async function createActivity(body) {
    try{
        const { name, difficult, duration, season, country} = body
        let {id} = body
        if (!id) {
            const data = await Activity.findAll({raw: true})
            id = data.length+1
        }
        const [newActivity, created] = await Activity.findOrCreate({
            where: {name: name},
            defaults: {id, difficult, duration, season}
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