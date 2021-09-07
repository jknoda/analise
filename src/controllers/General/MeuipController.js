const myip = require('quick-local-ip');
const IP = require('../../models/General/IPAccess');
const errDB = require('../../common/_sendErrorsDB');


module.exports = {
    async create(req,res){
        const idf = parseInt(await IP.count()) + 1;
        const ipnumber = myip.getLocalIP4();
        const data = new Date();
        const retorno = await IP.create( { idf, ipnumber, data } )
        .catch(function (err) {
            return errDB(res, err);
        });
        return res.send(idf.toString());
    },
    async summary(req,res){
        const retorno = await IP.count();
        return res.json(retorno);
    },
    async contador(req,res){
        const retorno = await IP.count();
        return res.send(retorno.toString());
    }
}