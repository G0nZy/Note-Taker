const http = require('http');
const fs = require('fs');
const express = require('express');
const path = require ('path');

const PORT = 8080;
    const app = express(); 
                
                // function generateMessage (request,response){

                //     response.end ('Use the Force');
                // } 

        require('.route/apiRoute')(app);
        require('./route/htmlRoute')(app);

            app.use(express.static('public'))
            app.use(express.static('db'))
            app.use(express.urlencoded({ extended:true}));
            app.use(express.json());
            
            
            
                const server = http.createServer(handleRequest);

            
            
            
            
            
            
            // serverStart.listen(openPort,function() {

            //     console.log('server is on & running');

            // });

            
            
            
            
            function handleRequest(req,res){

                const path = req.url;

                switch(path) {

                    
                    case '/notes':
                        return renderHtml(path + '.html', res);
                        default:
                            return renderHtml('/public/index.html',res);
                        }
                    }

            function renderHtml (filePath, res){
                return fs.readFile(__dirname + filePath, function(err,data){
                    if (err) throw err;
                    res.writeHead(200,{'Content-Type': 'text/html'});
                    res.end(data);
                });
            }



                server.listen(PORT,function(){

                    console.log ('server is now live ' + PORT);

                });






