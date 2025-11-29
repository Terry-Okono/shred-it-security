const { CosmosClient } = require("@azure/cosmos");

const client = new CosmosClient({
    endpoint: process.env.COSMOS_URI,
    key: process.env.COSMOS_KEY
});

const container = client
    .database("shreditDB")
    .container("shipments");

module.exports = container;
