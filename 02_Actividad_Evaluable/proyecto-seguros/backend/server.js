const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta al archivo JSON
const dataPath = path.join(__dirname, 'data', 'seguros.json');

// Leer todas las pólizas
app.get('/polizas', (req, res) => {
    const data = fs.readFileSync(dataPath, 'utf8');
    res.json(JSON.parse(data));
});

// Crear póliza
app.post('/polizas', (req, res) => {
    const data = fs.readFileSync(dataPath, 'utf8');
    const polizas = JSON.parse(data);
    polizas.push(req.body);
    fs.writeFileSync(dataPath, JSON.stringify(polizas, null, 2));
    res.status(201).json(req.body);
});

// Actualizar póliza
app.put('/polizas/:id', (req, res) => {
    const data = fs.readFileSync(dataPath, 'utf8');
    const polizas = JSON.parse(data);
    const index = polizas.findIndex(p => p.id_poliza === req.params.id);
    polizas[index] = req.body;
    fs.writeFileSync(dataPath, JSON.stringify(polizas, null, 2));
    res.json(req.body);
});

// Eliminar póliza
app.delete('/polizas/:id', (req, res) => {
    const data = fs.readFileSync(dataPath, 'utf8');
    let polizas = JSON.parse(data);
    polizas = polizas.filter(p => p.id_poliza !== req.params.id);
    fs.writeFileSync(dataPath, JSON.stringify(polizas, null, 2));
    res.status(204).send();
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));