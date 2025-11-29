const container = require("../shared/cosmosClient");

module.exports = async function (context, req) {
    const id = req.query.id;

    const { resource } = await container.item(id, id).read();

    context.res = {
        body: resource ?? { error: "Shipment Not Found" }
    };
};
