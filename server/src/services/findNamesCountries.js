const { Country } = require('../db')
const { Op } = require('sequelize')

async function findCountriesByName(name) {
    try{
        const results = await Country.findAll({
            where: {
                name:
                    {[Op.iLike]: `%${name}%`}
                },
            raw: true
        })
        return results
    } catch (error) {
        return error
    }
}

module.exports = findCountriesByName
