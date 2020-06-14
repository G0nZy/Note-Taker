const fs = require ('fs')
let notesFile = require('../db/db.json');
const { v4: uuidv4}= require ('uuid');


    module.exports = function (app){

        app.get('/api/notes', function (req,res){
            fs.readFile('./db/db.json','utf8', function (err, data){


                    if (err)throw err;
                    notesDb = JSON.parse(data)
                    res.json(notesDb);

            });
        })


            app.delete ('api/notes/:id', function (req,res){



                    console.log (req.params.id)
                    noteID= req.params.id

                    fs.readFile('.db/db.json', 'utf8', function (err, data){
                    
                            if (err)throw err;
                            let notesDb=JSON.parse(data)
                            
                            for (let i=0; i < notesDb.length; i++){


                                        if (notesDb[i].id === noteID){
                                            console.log('There you go')
                                            console.log (notesDbi[i])
                                            notesDb.splice(i,1)
                                        }

                            }
                                let newNotesDb = JSON.stringify(notesDb)
                                fs.writeFile('.db/db.json', newNotesDb, (err)=>{
                                                if (err) throw err;
                                                return res.json(notesFile)

                                })
                            })

            })

    };