const [isRegistered] = require('./database/conditions')
const [register] = require('./database/inserts')
const [initializeDB] = require('./database/initialize')
const [deleteUser] = require('./database/deletes')

initializeDB()

let user = {
    userID:'jacob', 
    password : "1234", 
    email: 'magnusreeves@rogers.com'
}

isRegistered(user, (response)=> {
    if(response.status === "OK"){
        if(response.count === 0){
            register(user, (response) => {
                    console.log(response)
            })
        }
    }
})





