const { Country, Activity } = require('../db');

async function findPkCountry(id) {
    try{
        const CountryDetail = await Country.findOne({
            where: {id: id},
            include: {
                model: Activity,
                attributes: ['name'],
                through: {attributes: []}
            }
        })
        if (CountryDetail) {
            return CountryDetail
        }
    } catch (error) {
        return error
    }
}

module.exports = findPkCountry