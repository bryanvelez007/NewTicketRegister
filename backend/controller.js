const bussines = require("./bussinesLogic")
async function saludar(request,response){
    const resultado = await bussines.getTicket(request.body.id);
    response.send({resultado});
}
module.exports = {
    saludar
}