const jwt = require("jsonwebtoken");

function autenticar(req, res, next){
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            erro: "Autenticação necesssária"
        });
    }

    try{
        
    }catch
}

module.exports = autenticar;
