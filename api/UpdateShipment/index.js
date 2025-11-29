const container = require("../shared/cosmosClient");

module.exports = async function (context, req) {
    const id = req.body.id;
    const status = req.body.status;

    let { resource } = await container.item(id, id).read();
    resource.status = status;

    await container.item(id, id).replace(resource);

    context.res = {
        body: { message: "Status Updated", shipment: resource }
    };
};
