const mysqlConfig = require("./connection").mysql_pool;

const getNome = (id) => {
    return new Promise((resolve, reject) => {
        mysqlConfig.getConnection(function (err, connection) {
            connection.query(`SELECT nome FROM personagens WHERE id='${id}'`, function(err, rows, fields) {
                if (err) reject(err);
                else {
                    resolve(JSON.stringify(rows));
                }
            });
            connection.release();
        })
    }
)};

module.exports = async (id) => {
    try {
        const rows = await getNome(id);
        return rows;
        } catch (err) {
        throw err;
    }
};