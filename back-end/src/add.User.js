const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const DB = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'bookmymovie'
  }

let addUser = async (input) => {
    const connection = mysql.createConnection(DB);
    
    await connection.connectAsync();

    const sql = "INSERT INTO USERS (fName,lName,email,mobile,password) VALUES(?,?,?,?,?);"

    await connection.queryAsync(sql,
        [
            input.fName,
            input.lName,
            input.email,
            input.mobile,
            input.password,
        ]);

    await connection.endAsync();
}


let authUser = async (input) => {
    const connection = mysql.createConnection(DB);
    
    await connection.connectAsync();

    const sql = "SELECT * FROM USERS WHERE EMAIL = ? AND PASSWORD = ? ";

    const results = await connection.queryAsync(sql,
        [
            input.email,
            input.password,
        ]);

    await connection.endAsync();

    if(results.length === 0 ){
        throw new Error("Invalid Credentials");
    }
};

let forgotPassword = async (input) => {
    const connection = mysql.createConnection(DB);
    
    await connection.connectAsync();

    const sql = "SELECT * FROM USERS WHERE EMAIL = ? AND MOBILE = ? ";

    const results = await connection.queryAsync(sql,
        [
            input.email,
            input.mobile,
        ]);

    await connection.endAsync();

    if(results.length === 0 ){
        throw new Error("Invalid Credentials");
    }
};

let resetPassword = async (input) => {
    const connection = mysql.createConnection(DB);
    
    await connection.connectAsync();

    const sql = "UPDATE USERS SET PASSWORD = ? WHERE mobile = ?;"

    await connection.queryAsync(sql,
        [
            input.password,
            input.mobile
        ]);

    await connection.endAsync();
}

module.exports = { addUser, authUser, forgotPassword, resetPassword }