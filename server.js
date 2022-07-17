
const express = require('express')
const app = express ()
const PORT = 8000

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html')
})

const smokers ={
     'oluchi' :  { 
         'birthName' : 'omeire',
        'age': 30,
         'birthLocation': 'oyigbo',
         'occupation' : 'music',
   },
   'chiwendu' : {
    'birthName' : 'davido',
    'age': 32,
     'birthLocation': 'location',
     'occupation' : 'genre',
   },
    'unknown':{
    'birthName' : 'unknown',
    'age': 0,
     'birthLocation': 'unknown',
     'occupation' : 'hip hop',
   }
} 

app.get('/api/:smokers', (request,response)=>{
    const smokersName = request.params.smokers.toLowerCase()

    if (smokers[smokersName]) {
        response.json(smokers[smokersName])
    }
    else{
        response.json(smokers['unknown'])
    }
})

app.listen( PORT, () => {
        console.log(`listening on $(port) go get this bitch`)
    })
    