const { allCountries, findPkCountry, findCountriesByName, orderAndFilter } = require('../services')

async function getAllCountries(req,res) {
    try{
        const {name, order, region, activities} = req.query
        if (name && !order && !region && !activities) {
            const results = await findCountriesByName(name)
            if (results.length === 0) {
                throw new Error('Not Found')
            } else {
                res.status(200).json(results)
            }
        }
        //else if (!name && order && region && activities) {
        //     const results = await orderAndFilter({order, region, activities})
        //     res.status(200).json(results)
        // }
        else {
            const Countries = await allCountries()
            res.status(200).json(Countries)
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function getCountryId(req,res) {
    try{
        const { id } = req.params
        const CountryId = await findPkCountry(id.toUpperCase())
        if (CountryId) {
            res.status(200).json(CountryId)
        } else {
            throw new Error('ID not Found')
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getAllCountries,
    getCountryId,
    
}