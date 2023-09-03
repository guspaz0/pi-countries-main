const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;
const {initializeDB} = require('./src/services/bulkcreate')

conn.sync({ alter: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  //initializeDB()
})
}).catch(error => console.error(error))
