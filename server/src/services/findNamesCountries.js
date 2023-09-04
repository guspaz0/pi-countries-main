const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

async function findCountriesByName(name) {
    try{
        const results = await Country.findAll({
            where: {
                name:
                    {[Op.iLike]: `%${name}%`}
                },
            order: [['name', 'ASC']],
            include: {
                model: Activity,
                attributes: ['name'],
                through: {attributes: []}
            }
        })
        return results
    } catch (error) {
        return error
    }
}

module.exports = findCountriesByName
