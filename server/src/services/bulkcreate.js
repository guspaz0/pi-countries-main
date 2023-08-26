const { Country } = require('../db')
const axios = require('axios')

async function initializeDB() {
    try {
        const {data} = await axios.get('http://localhost:5000/countries')
        const data1 = data.map((e) => {
            const {cca3, name, capital, region, subregion, area, flags, population} = e
            return {
            id: cca3, name: name.common, capital: capital && capital[0], region, subregion, area, flags: flags.png, population
        }})
        const bulk = await Country.bulkCreate(data1)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {initializeDB}