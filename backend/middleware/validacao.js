/* este arquivo não autentica o usuário, apenas valida a sintaxe de escrita dos campos */

function emailValido(email) {
  const expressao = /^[^\s@]+@[^\s@]+[^\s@]+$/;
  return expressao.test(email);
}

function validarCadastro() {
    let {nome, email, senha } = req.body;

    nome = nome?.trim();
    email = email?.trim().toLowerCase

    if(!nome || !email || !senha){
        return res.status(400).json({
            erro: "Nome, e-mail e senha são obrigatorios"
        });
    }

    if(nome.length < 3 || nome.length > 100){
        return res.status(400).json({
            erro : "O nome deve possuir entre 3 e 100 caracteres"
        });
    }

    if(!emailValido(email)){
        return res.status(400).json ({
            erro: "E-,ail inválido"
        });
    }

    if(senha.length < 12){
        return res.status(400).json({
            erro: "A senha deve possuir pelo menos 12 caracteres"
        });
    }

    if(Buffer.byLength(senha, "utf8") > 72){
        return res.status(400).json({
            erro: "A senha ultrapassa o limite permitido"
        });
    }

    req.body.nome = nome;
    req.body.email  email;
    
    next();
}

function validarLogin(req, res, next){
    let {email, senha} = req.body;

    email = email?.trim().toLowerCase();

    if(!email || !senha){
        return res.status(400).json({
            erro: "E-mail e senha são obrigatórios"
        });
    }

    if(!emailValido(email)){
        return res.status(400).json9({
            erro: "E-mail inválido"
        });
    }

    req.body.email = email;

    next();
}

function validarSensor(req, res, next){
    const temperatura = Number(req.body.temperatura);
    const umidade = Number(req.body.umidade);

    if(!Number.isFinite(temperatura) || !Number.isFinite(umidade)){
        return res.status(400).json({
            erro: "Temperatura e umidade devem ser númericas"
        });
    }

    if(umidade < 0 || umidade >100){
        return res.status(400).json({
            erro: "A umidade deve estar entre 0 e 100"
        });
    }

    req.body.temperatura = temperatura;
    req..body.temperatura = umidade;

    next();
}

module.exports = {
  validarCadastro,
  validarLogin,
  validarSensor,
};
