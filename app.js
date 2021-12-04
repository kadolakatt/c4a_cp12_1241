const express = require("express");
const app = express();
const port = 8000;

app.use(express.json()); //capa intermedia para procesar JSON de las peticiones

app.get('/', (request, response) => {
    console.log(request.query);
    if (request.query["id"]) {
        response.send("<h1>Hola desde Express con parametro querystring id: " + request.query["id"] + "</h1>");    
        //response.send("<h1>Hola desde Express con parametro querystring id: " + request.query.id + "</h1>");    
    }else {
        response.send("<h1>Hola desde Express</h1>");
    }
});

app.get('/usuario/:id', (request, response) => {
    //response.send("<h1>Hola desde Express usando parámetros por rutas variables" + request.params.id + "</h1>");
    //response.send("<h1>Hola desde Express usando parámetros por rutas variables" + request.params['id'] + "</h1>");
    response.send(JSON.stringify({ mensaje: "Hola desde JSON y Express", parametros: request.params }));
});

app.post('/producto/crear', (request, response) => {
    response.send("Hola desde Express con respuesta a un POST: " + JSON.stringify(request.body));
});

app.put('/producto/editar', (request, response) => {
    response.send("Hola desde Express con respuesta a un PUT: " + JSON.stringify(request.body));
});


app.listen(port, () => {
    console.log("El servidor se está ejecutando...");
});