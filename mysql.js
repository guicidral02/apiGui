import mysql from 'mysql2/promise';

const conexao = async () => {
    const con = await mysql.createConnection({
        host: '127.0.0.1',
        port: 3306,
        user: 'root',
        password: '123456',
        database: 'api'
    });

    return con;
}

const getUsuarios = async () => {
    const con = await conexao();
    let dados;

    if (!id) {
        dados = await con.query('SELECT * FROM usuarios;');
    } else {
        dados = await con.query('SELECT * FROM usuarios WHERE id=?;', [id]);
    }

    con.close();
    return dados[0];   
}

const createUsuario = async (user) => {
    const con = await conexao();
    await con.query(
        'INSERT INTO usuarios (nome, email) VALUES (?, ?);',
        [user.nome, user.email]
    );

    con.close();
    return `Usuário ${user.nome} adicionado ao MySQL!`;
}

console.log(await getUsuario());