const express = require ('express');
const {parse} = require('csv-parse');
const fs = require('fs');
const app = express();

const parser = parse({columns: true}, function (err, records){
    console.log(records);
});

fs.createReadStream('./it-companies_Divissenko_Vassiljev.csv').pipe(parser);

app.use(express.json());

app.listen(3000, () => console.log('Server started'));