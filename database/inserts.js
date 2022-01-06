let register = (credentials, callback) => {
    const sqlConnection = require('./init');
    sqlConnection.query(
        `INSERT INTO Accounts VAlUES( 
            '${credentials.userID}',
            '${credentials.email}' ,
            '${credentials.password}'
        )`, 
        (error, result) => {
            if(error){
                console.log(error)
                callback({status: error.code})
            }
            else{ 
                callback({status: "OK"});
            }
        }
    )
}


let insertGame = (info, callback) => {
    const sqlConnection = require('./init');
    sqlConnection.query(
        `INSERT INTO Game VAlUES( 
            '${credentials.userID}',
            '${credentials.email}' ,
            '${credentials.password}'
        )`, 
        (error, result) => {
            if(error){
                console.log(error)
                callback({status: error.code})
            }
            else{ 
                callback({status: "OK"});
            }
        }
    )
}

module.exports = [register]