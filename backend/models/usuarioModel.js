const banco = require("../config/db");
async function buscarPorEmail(email) {
  const [usuarios] = await banco.execute(
    `Select
        id,
        nome,
        email,
        senha_hash,
        papel
        FROM Usuarios
        WHERE email = ?`,
    [email],
  );
  return usuarios[0] ?? null;
}

async function buscarPorID(id) {
  const [usuarios] = await banco.execute(
    `Select
        id,
        nome,
        email,
        senha_hash,
        papel
        FROM Usuarios
        WHERE email = ?`,
    [id],
  );
  return usuarios[0] ?? null;
}

async function criarUsuario(nome, email, senha_Hash) {
  const [resultado] = await banco.execute(
    `INSERT INT Usuarios
            (nome, email, senha_hash, papel)
            VALUES (?, ?, ?, ''USUARIO)
            `,
    [nome, email, senha_Hash],
  );
  return resultado.insertID;
}

module.exports = {
  buscarPorEmail,
  buscarPorId,
  criarUsuario,
};
