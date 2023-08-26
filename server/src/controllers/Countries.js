const { allCountries, findPkCountry } = require('../services')

async function getAllCountries(req,res) {
    try{
        const Countries = await allCountries()
        res.status(200).json(Countries)
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