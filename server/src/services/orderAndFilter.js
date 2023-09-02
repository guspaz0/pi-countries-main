const { Country, Activity } = require('../db');
const {Op} = require('sequelize');

async function orderAndFilter({order, region, activities}) {
    try {
        const results = await Country.findAll({
            order: [['name', order? `${order}` : 'ASC']],
            where: {
                region: region && region
            },
            include: {
                model: Activity,
                attributes: ['name'],
                where: {
                    name: activities && activities
                },
                through: { attributes: []}
            },
        })
        return results
        // } 
        // else if (filter.activities) {
        //     const results = await Country.findAll({
        //         order: [['name', `${order}`]],
        //         where: {region: filter.activities}
        //     })
        //     return results
        // }
    } catch (error) {
        return error
    } 
}

module.exports = orderAndFilter