const {Activity, Country} = require('../db')

async function allActivities() {
    try{
        const allActivities = await Activity.findAll({
            include: {
                model: Country,
                attributes: ['id'],
                through: { attributes: []}
            },
            order: [['name', 'ASC']]
        }
        )
        return allActivities
    } catch (error) {
        return error
    }
}

module.exports = allActivities