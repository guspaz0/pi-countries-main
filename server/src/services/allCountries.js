const { Country } = require('../db');

const allCountries = async function () {
    try{
        const allCountries = await Country.findAll({
            order: [['name', 'ASC']]
        })
        return allCountries
    } catch (error) {
        return error
    }
}

module.exports = allCountries