const mysqlConfig = require("./connection").mysql_pool;

const getImagem = () => {
  return new Promise((resolve, reject) => {
    mysqlConfig.getConnection(function (err, connection) {
      connection.query('SELECT * FROM personagens ORDER BY RAND() LIMIT 1', function(err, rows, fields) {
        if (err) reject(err);
        else resolve(rows);
      });
      connection.release();
    })
  }
)}

module.exports = async () => {
  try {
      const rows = await getImagem();
      return JSON.stringify(rows);
    } catch (err) {
      throw err;
  }
};