const container = require("../shared/cosmosClient");

module.exports = async function (context, req) {
    const body = req.body;

    const shipment = {
        id: body.id,
        sender: body.sender,
        receiver: body.receiver,
        origin: body.origin,
        destination: body.destination,
        status: "Created",
        date: new Date()
    };

    await container.items.create(shipment);

    context.res = {
        body: { message: "Shipment Created", shipment }
    };
};
