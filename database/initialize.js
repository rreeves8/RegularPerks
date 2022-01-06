let initializeDB = () => {
    testTable("Accounts", createAccounts)
    testTable('Games', createGames)
    testTable("Bettings", createBettings)
}

function testTable(table, callback){
    const sqlConnection = require('./init');
    sqlConnection.query(
        `SELECT count(*) from ${table}`
        , 
        (error, result) => {
            if(error){
                if(error.code === 'ER_NO_SUCH_TABLE'){
                    callback()
                }
            }
        }
    )
}

function createGames(){
    const sqlConnection = require('./init');
    sqlConnection.query(
        `create table Games (
            gGameID varchar(255) not null,
            gSport varchar(8),
            gBettingID varchar(255),
            gHomeTeam varchar(15),
            gAwayTeam varchar(15),
            gDate varchar(10),
            gStartTime varchar(10),
            gEndTime varchar(10),
            PRIMARY KEY (gGameID),
            FOREIGN KEY (gBettingID) REFERENCES Accounts(aUserID)
                ON DELETE CASCADE ON UPDATE CASCADE,
            CONSTRAINT UC_Account UNIQUE (gGameID)
        )`,
        (error, result) => {
            if (error){
                console.log(error)
            }
            else{
                console.log("Created Accounts Table " + result)
            }
        } 
    )  
}

function createBettings(){
    const sqlConnection = require('./init');
    sqlConnection.query(
        `create table Bettings (
            bGameID varchar(255) not null,
            bPool varchar(8),
            bOdds varchar(10),
            bUserID varchar(15) not null,
            PRIMARY KEY (bGameID),
            FOREIGN KEY (bUserID) REFERENCES Accounts(aUserID)
                ON DELETE CASCADE ON UPDATE CASCADE,
            FOREIGN KEY (bGameID) REFERENCES Games(gGameID)
                ON DELETE CASCADE ON UPDATE CASCADE
        )`,
        (error, result) => {
            if (error){
                console.log(error)
            }
            else{
                console.log("Created Accounts Table " + result)
            }
        } 
    )  
}

function createAccounts(){
    const sqlConnection = require('./init');
    sqlConnection.query(
        `create table Accounts (
            aUserID VARCHAR(15) NOT NULL,
            aEmail VARCHAR(30),
            aPassword VARCHAR(255) NOT NULL,
            aPayPalID VARCHAR(255)
            PRIMARY KEY (aUserID),
            CONSTRAINT UC_Account UNIQUE (aUserID, aPayPalID)
        )`,
        (error, result) => {
            if (error){
                console.log(error)
            }
            else{
                console.log("Created Accounts Table " + result)
            }
        } 
    )  
}


module.exports = [initializeDB]