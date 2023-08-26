const { Country } = require('../db');

async function findPkCountry(id) {
    try{
        const CountryDetail = await Country.findByPk(id)
        if (CountryDetail) {
            return CountryDetail
        }
    } catch (error) {
        return error
    }
}

module.exports = findPkCountry