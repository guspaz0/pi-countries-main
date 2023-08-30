const { Country, Activity } = require('../db');

const allCountries = async function () {
    try{
        const allCountries = await Country.findAll({
            order: [['name', 'ASC']],
            include: {
                model: Activity,
                attributes: ['name'],
                through: {attributes: []}
            }
        })
        return allCountries
    } catch (error) {
        return error
    }
}

module.exports = allCountries