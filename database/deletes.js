let deleteUser = (credentials, callback) => {
    const sqlConnection = require('./init')
    sqlConnection.query(`DELETE FROM Accounts WHERE
        aUserID = '${credentials.userID}' AND 
        aPassword = '${credentials.password}'    
    `),
    (result,error) => {
        if(error){
            console.log(error)
            callback({status: error.code})
        }
        else{
            callbackback({status: "OK"})
        }
    }
}


module.exports = [deleteUser]