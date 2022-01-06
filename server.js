const express = require('express')
const cookieparser = require('cookie-parser')
const app = express()

app.use(
    cookieparser(),
    (request,response,next)=>{
        response.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-PINGOTHER'
        })

        if(request.method === 'OPTIONS'){
            response.sendStatus(200)
        }
        else{
            next()
        }
    },
    (request,response,next)=>{
        if(request.method === 'POST'){
            let type = request.headers['content-type']
            let bodyStream = '';
            
            request.on('data', chunk => {
                bodyStream += chunk.toString()
            })

            request.on('end', () => {
                if(type === 'json'){
                    request.body = JSON.parse(bodyStream)
                    next()
                }
                
                if(type === 'xml'){
                    console.log(request.body)
                    next()
                }
            })
        }
        else{
            next();
        }
    }
)

app.get('/isRegistered', (request, response)=>{
    

    response.send(home)
})

app.post('/register', (requse))

app.post('/change_home', (request, response)=>{
    home = request.body.data
    console.log(home)
    response.cookie("data", home)
    response.send("OK")
})

app.listen(8080)