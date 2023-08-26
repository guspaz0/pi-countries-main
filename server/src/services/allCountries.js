const { Country } = require('../db');

const allCountries = async function () {
    try{
        const allCountries = await Country.findAll()
        return allCountries
    } catch (error) {
        return error
    }
}

module.exports = allCountries