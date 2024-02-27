const express = require('express');
const cors = require('cors');
const app = express();
const randomReference = require('./src/config/random-reference');
const port = 3000;

app.use(cors());

app.post('/api/Feedback', (req, res) => {
    res.json({
        "name": "Alberto",
        "stars": 4,
        "observation": "Excelente atencion al cliente"
    });
});

app.get('/api/Feedback', (req, res) => {
    res.json([
        {
            "name": "darwin junior",
            "stars": 5,
            "observation": "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer."
        },
        {
            "name": "david jose",
            "stars": 3,
            "observation": "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer."
        },
        {
            "name": "alberto mario",
            "stars": 1,
            "observation": "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer."
        },
        {
            "name": "Valeria Margarita",
            "stars": 4,
            "observation": "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer."
        },
        {
            "name": "Erick Osorio",
            "stars": 4,
            "observation": "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer."
        },
        {
            "name": "Alberto Panracio",
            "stars": 4,
            "observation": "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer."
        }
    ]);
});

app.post('/api/Transaction', (req, res) => {
    res.json({
        "type": "transaction",
        "title": "pago exitoso",
        "status": 1,
        "details": "concept app",
        "instance": "true"
    });
});

app.get('/api/ComboBox/Wompi', (req, res) => {
    res.json([
        {
            "prop": "Wompi"
        }
    ]);
});

app.post('/api/Client', (req, res) => {
    res.json({
        "id": 1,
        "typeDocumentsId": 2,
        "numDocument": "1102823107",
        "fname": "jose daniel",
        "lname": "perez estrada",
        "email": "user@yahoo.com",
        "phoneNumber": "313234567",
        "address": "medellin"
    });
});

app.post('/api/LicensePlate/GetClientByLicensePlate', (req, res) => {
    res.json({
        "id": 1,
        "numDocument": "1102823107",
        "fName": "jose daniel",
        "lName": "perez estrada",
        "email": "user@yahoo.com",
        "phoneNumber": "313234567",
        "address": "medellin",
        "hasProcedure": false,
        "hasFiles": false,
        "ProcedureId": 5,
        "reference": randomReference()
    });
});

app.get('/api/ComboBoxGeneral/GetTransitos', (req, res) => {
    res.json([
        {
            "id": 2,
            "prop": "CALDAS"
        },
        {
            "id": 16,
            "prop": "DARKA LTDA"
        },
        {
            "id": 17,
            "prop": "medallo LTDA"
        },
        {
            "id": 18,
            "prop": "medellin city"
        },
        {
            "id": 3,
            "prop": "OTT PRUEBAS"
        },
        {
            "id": 1,
            "prop": "SANTA FE DE ANTIOQUIA"
        },
        {
            "id": 15,
            "prop": "SINCELEJO CITY"
        }
    ]);
});

app.get('/api/ComboBoxGeneral/VehicleTypes', (req, res) => {
    res.json([
        {
            "id": 3,
            "prop": "Carro"
        },
        {
            "id": 1,
            "prop": "Moto"
        }
    ]);
});

app.get('/api/ComboBoxGeneral/GetTramites', (req, res) => {
    res.json([
        {
            "id": 6,
            "prop": "duplicado_de_matricula",
            "isInitial": false
        },
        {
            "id": 5,
            "prop": "inscripcion_de_alerta",
            "isInitial": false
        },
        {
            "id": 3,
            "prop": "levantamiento_prenda",
            "isInitial": false
        },
        {
            "id": 1,
            "prop": "matricula_inicial",
            "isInitial": false
        },
        {
            "id": 4,
            "prop": "matricula_inicial_con_alerta",
            "isInitial": false
        },
        {
            "id": 2,
            "prop": "traspaso_automotor",
            "isInitial": false
        },
        {
            "id": 8,
            "prop": "traspaso_levantamiento_alerta",
            "isInitial": false
        }
    ])
})

app.get('/api/Tariff/:TramiteId/:TransitoId', (req, res) => {
    res.json({
        "id": 231,
        "statusName": "Active",
        "companiesName": "Bitákora S.A.S",
        "branchOfficeName": "Bitákora Sincelejo",
        "transitosName": "string",
        "tramitesName": "Inscripción de alerta",
        "value": 89900,
        "createdAt": "06/01/2023 08:19:49"
    });
})

app.get('/api/Tariff/:TramiteId/:TransitoId', (req, res) => {
    res.json({
        "id": 231,
        "statusName": "Active",
        "companiesName": "Bitákora S.A.S",
        "branchOfficeName": "Bitákora Sincelejo",
        "transitosName": "string",
        "tramitesName": "Inscripción de alerta",
        "value": 89900,
        "createdAt": "06/01/2023 08:19:49"
    })
});

app.post('/api/Report/Monitoring/Licenseplate', (req, res) => {
    res.json({
        "id": 2996,
        "typeDocumentsId": 2,
        "typeDocumentsName": "Cédula Ciudadania",
        "numDocument": "11092314123",
        "motorNumber": "YTREWQ654321",
        "numLicensePlate": "HGY04A",
        "fullNameUserBranchOffice": "Victor Franco",
        "fullName": "Joisman Jimenez",
        "fullNameRunt": "Daniel Franco",
        "fullNamePrint": "Sara Franco",
        "statusId": 9,
        "statusName": "Impreso",
        "tramitesId": 5,
        "tramitesName": "inscripcion de alerta",
        "transitosId": 3,
        "transitosName": "OTT PRUEBAS",
        "companyId": 68,
        "companyName": "BItákora S.A.S",
        "branchOfficeId": 109,
        "branchOfficeName": "BItákora Sincelejo",
        "createdAt": "14/08/2023",
        "factura": 89900,
        "impuesto": 30000,
        "dateRegister": "14/08/2023",
        "nameCity": "Bogota D.C",
        "numberTicket": "#123433",
        "hasFeedback": false,
        "liquidatedValue": 0
    });
});

app.post('/api/Config', (req, res) => {
    res.json({
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvZSBEb2UiLCJpYXQiOjE1MTYyMzkwMjIsImV4cCI6MTUxNjIzOTEyMn0.xxxxxxx",
        "companyId": 1,
        "rolId": 1,
        "expirationToken": "2023-09-30T23:59:59Z",
        "logo": "https://tramitesamotor.com/wp-content/uploads/2018/10/FAVIC0N.jpg"
    });
});

app.get('/api/ComboBoxGeneral/GetFileTramites/:id', (req, res) => {
    res.json([
        {
            "id": 1,
            "idTramites": 1,
            "idFileTramites": 1,
            "nameTramites": "matricula_inicial",
            "nameFileTramites": "Factura",
            "nameFile": "InvoiceFile",
            "isRequired": true
        },
        {
            "id": 2,
            "idTramites": 1,
            "idFileTramites": 2,
            "nameTramites": "matricula_inicial",
            "nameFileTramites": "Fotocopia de la cédula del comprador",
            "nameFile": "DocumentFile",
            "isRequired": true
        },
        {
            "id": 3,
            "idTramites": 1,
            "idFileTramites": 3,
            "nameTramites": "matricula_inicial",
            "nameFileTramites": "Empadronamiento",
            "nameFile": "EmpadroFile",
            "isRequired": true
        }
    ]);
})

app.post('/api/Tramites/SaveProcedureMultiFiles', (req, res) => {
    res.json({
        "status": 200
    });
});

app.post('/api/Tramites/SaveAnotherProcedure', (req, res) => {
    res.json({
        "status": 200
    })
});

app.put('/api/Tramites/ChangeFileProcedure/:id', (req, res) => {
    res.json({
        "status": 200
    });
});

app.get('/api/Tramites/LogTrackingTramite/:id', (req, res) => {
    res.json({
        "list": [
            {
                "tramiteUserId": 3061,
                "comment": "faltan estos documentos ",
                "nameFile": "TaxPaymentFile",
                "isTracking": false,
                "statusIds": 0
            },
            {
                "tramiteUserId": 3061,
                "comment": "faltan estos documentos ",
                "nameFile": "DocumentPropietario",
                "isTracking": false,
                "statusIds": 0
            },
            {
                "tramiteUserId": 3061,
                "comment": "faltan estos documentos ",
                "nameFile": "FormRuntFile",
                "isTracking": false,
                "statusIds": 0
            },
            {
                "tramiteUserId": 3061,
                "comment": "faltan estos documentos ",
                "nameFile": "PoderTramiteFile",
                "isTracking": false,
                "statusIds": 0
            },
            {
                "tramiteUserId": 3061,
                "comment": "Falta",
                "nameFile": "DocumentPropietario",
                "isTracking": false,
                "statusIds": 0
            },
            {
                "tramiteUserId": 3061,
                "comment": "Falta",
                "nameFile": "PoderTramiteFile",
                "isTracking": false,
                "statusIds": 0
            },
            {
                "tramiteUserId": 3061,
                "comment": "Falta",
                "nameFile": "FormRuntFile",
                "isTracking": false,
                "statusIds": 0
            }
        ],
        "records": 0,
        "pages": 0,
        "fileName": null
    });
});

app.get('/api/ComboBoxGeneral/TypeDocuments', (req, res) => {
    res.json([
        {
            "id": 1,
            "prop": "Carnet Diplomático"
        },
        {
            "id": 2,
            "prop": "Cédula Ciudadanía"
        },
        {
            "id": 3,
            "prop": "Cédula de Extranjería"
        },
        {
            "id": 9,
            "prop": "Nit"
        },
        {
            "id": 4,
            "prop": "Pasaporte"
        },
        {
            "id": 5,
            "prop": "Registro Civil"
        },
        {
            "id": 7,
            "prop": "Tarjeta de Identidad"
        },
        {
            "id": 6,
            "prop": "TI2"
        }
    ]);
});

app.listen(port, () => {
    console.log(`radicando-webapp-mock: status ready running`);
});
