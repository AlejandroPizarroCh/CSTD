//server/index.js

const express = require("express"); 
const PORT = process.env.PORT || 3001; 
const app = express(); 
const fs = require("fs"); 


const newPet = {
    "pet4" : {
        "name" : "nala",
        "type" : "dog",
        "owner" : "eldelcesar",
        "color" : "salt and peper",
        "id": 4
    }
}

const newPet2 = {
    "pet5" : {
        "name" : "xerath",
        "type" : "inconclusive",
        "owner" : "alejandrop",
        "color": "gray and blue",
        "id" : 5
    }
}


app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"}); 
}); 

app.get("/pets", (req, res) => {
    fs.readFile( __dirname + "/" + "pets.json", "utf8", (err, data) => {
        console.log( data ); 
        res.end( data ); 
    }); 
}); 

app.post("/addPet", (req, res) => {
    fs.readFile(__dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse( data );
        data["pet4"] = newPet["pet4"];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

app.put("/putPet", (req, res) => {
    fs.readFile(__dirname + "/" + "pets.json", "utf8", (err, data) => {
        data = JSON.parse(data); 
        data["pet5"] = newPet2["pet5"]; 
        console.log(data); 
        res.end(JSON.stringify(data)); 
    }); 
}); 

app.delete("/deletePet", function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "pets.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["pet4"];
        
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

//change JSON
app.post('/addPet2', function (req, res) {

    fs.writeFile(fileName, JSON.stringify(file), function writeJSON(err) {
        if (err) return console.log(err);
        console.log(JSON.stringify(file));
        console.log('writing to ' + fileName);
      });
 })

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`); 
}); 