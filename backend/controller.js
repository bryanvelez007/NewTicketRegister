const bussines = require("./bussinesLogic")
async function saludar(request,response){
    //const bryan = await bussines.getTicket(request.body.id);
    response.send(await bussines.getTicket(request.body.id));
}
module.exports = {
    saludar
}