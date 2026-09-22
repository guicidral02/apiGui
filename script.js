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
    const dados = await con.query('SELECT * FROM usuarios;')

    con.close();
    return dados[0];   
}

console.log(await getUsuarios());