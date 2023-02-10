const data = require('../data/data.json')
const Certificate = require('../models/certificate.js')
const Company = require('../models/company.js')
const Position = require('../models/position.js')
const worker = require('../models/worker.js')
const workerCertificate = require('../models/workerCertificate.js')

async function readFile(data) {
    for (item in data) {
        bdate = item["dateOfBirth"] != undefined ? item["dateOfBirth"]["$date"] : ''
        jdate = item["dateJoined"] != undefined ? item["dateJoined"]["$date"] : ''
    }
}