var express = require('express');
var router = express.Router();
var request = require('request');


router.get('/', function(req, res, next) {
    res.render('apiTest', { title: 'Test API with Status and Latency' });
    
});

router.get('/status/:apiserver/:statuscode', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    
;(async () => {
    let apiserver = req.params.apiserver;
    let statuscode = req.params.statuscode;
    let apiURL = apiserver
    console.log(`apiURL: ${apiURL}`);
    const options = {
        url: `http://${apiURL}/api/status/${statuscode}`
    }
    await getStatusCode(function(response){
        // response = JSON.parse(response)
        if(response){
            // res.send(response)
            res.render('apiTest', { title: 'Done!', logs:`Respose: ${response}`  });

        }
        else{
            res.render('apiTest', { title: 'Done!', logs:`Respose: ${response}`  });       
        }
    },options)

})()
});

router.get('/latency/:apiserver/:latency', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    
;(async () => {
    let apiserver = req.params.apiserver;
    let latency = req.params.latency;
    let apiURL = apiserver
    console.log(`apiURL: ${apiURL}`);
    const options = {
        url: `http://${apiURL}/api/latency/${latency}`
    }
    await getStatusCode(function(response){
        // response = JSON.parse(response)
        if(response){
            // res.send(response)
            res.render('apiTest', { title: 'Done!', logs:`Respose: ${response}`  });
        }
        else{
            // res.send("api not working")
            res.render('apiTest', { title: 'Done!', logs:`Respose: ${response}`  });
            // res.render('apiTest', { title: 'Error', logs: response });

        }
    },options)

})()
});

async function getStatusCode(callback,options){
    request(options,(err,res,body) => {
        if(err){
            return callback(err);
        }
        return callback(body)
    })
}
async function getLatency(callback,options){
    request(options,(err,res,body) => {
        if(err){
            return callback(err);
        }
        return callback(body)
    })
}
  
module.exports = router;
