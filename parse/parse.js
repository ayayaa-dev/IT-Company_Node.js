const data = require('../data/data.json')
const Certificate = require('../models/certificate.js')
const Company = require('../models/company.js')
const Position = require('../models/position.js')
const Worker = require('../models/worker.js')
const workerCertificate = require('../models/workerCertificate.js')

async function readFile(data) {
    for (item in data) {
        bdate = item["dateOfBirth"] != undefined ? item["dateOfBirth"]["$date"] : ''
        jdate = item["dateJoined"] != undefined ? item["dateJoined"]["$date"] : ''
        worker = await Worker.create({
            name: item["name"],
            dateOfBirth: item["dateOfBirth"],
            city: item["city"],
            address: item["address"],
            phone: item["phone"],
            email: item["email"],
            dateJoined: item["dateJoined"],
            companyID: item["companyID"],
            positionID: item["positionID"],
        })
        worker_id = worker.worker_id
        certificates = item['certificates']
        for (let i = 0; i < certificates.length; i++){
            const title = certificates[i].charAt(0).toUpperCase() + certificates[i].slice(1)
            const certificate = await Certificate.findOne({
                where: {name: title},
                attributes: ['certificate_id'],
                raw: true
            })
            if (certificate == null) {
                await Certificate.create({name: title})
            }else{
                await workerCertificate.create({ worker_id: worker.worker_id, certificate: certificate.certificate_id })
            }
        }

        
    }
}