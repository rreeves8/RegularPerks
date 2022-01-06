let isRegistered = (credentials, callback) => {
    const sqlConnection = require('./init');
    sqlConnection.query(
        `SELECT count(*) from Accounts ` +
        `where aUserID = '${credentials.userID}' and ` +
        `aPassword = '${credentials.password}'`
        , 
        (error, result) => {
            if(error){
                console.log(error)
                callback({status: error.code})
            }
            else{ 
                callback({count: result[0]['count(*)'], status: "OK"});
            }
        }
    )
}

module.exports = [isRegistered]