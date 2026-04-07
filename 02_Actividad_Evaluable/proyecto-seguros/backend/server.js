const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const dataPath = path.join(__dirname, 'data', 'seguros.json');

// Leer pólizas
const leerPolizas = () => {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data);
};

// Escribir pólizas
const escribirPolizas = (polizas) => {
    fs.writeFileSync(dataPath, JSON.stringify(polizas, null, 2));
};

// Generar siguiente ID (respeta los que ya existen)
const generarSiguienteId = () => {
    const polizas = leerPolizas();
    
    if (polizas.length === 0) {
        return 'ID00001';
    }
    
    // Extraer todos los números de los IDs
    const numeros = polizas.map(p => {
        const num = parseInt(p.id_poliza.substring(2));
        return num;
    });
    
    // Encontrar el número más alto
    const maxNumero = Math.max(...numeros);
    
    // Generar el siguiente
    const siguienteNumero = maxNumero + 1;
    const siguienteId = `ID${String(siguienteNumero).padStart(5, '0')}`;
    
    return siguienteId;
};

// GET - Todas las pólizas
app.get('/polizas', (req, res) => {
    const polizas = leerPolizas();
    res.json(polizas);
});

// GET - Obtener siguiente ID disponible
app.get('/siguiente-id', (req, res) => {
    const siguienteId = generarSiguienteId();
    res.json({ id: siguienteId });
});

// POST - Crear nueva póliza (el ID se genera automáticamente)
app.post('/polizas', (req, res) => {
    const polizas = leerPolizas();
    
    // Generar ID automático
    const nuevoId = generarSiguienteId();
    
    // Crear póliza con el ID generado (ignorar cualquier ID que venga del frontend)
    const nuevaPoliza = {
        id_poliza: nuevoId,
        vigencia: req.body.vigencia,
        matricula: req.body.matricula,
        edad_coche: req.body.edad_coche,
        edad_tomador: req.body.edad_tomador,
        cilindrada: req.body.cilindrada,
        cilindros: req.body.cilindros,
        transmision: req.body.transmision,
        comb_electrico: req.body.comb_electrico,
        peso: req.body.peso,
        siniestro: req.body.siniestro
    };
    
    polizas.push(nuevaPoliza);
    escribirPolizas(polizas);
    res.status(201).json(nuevaPoliza);
});

// PUT - Actualizar póliza (no se puede cambiar ID ni matrícula)
app.put('/polizas/:id', (req, res) => {
    const polizas = leerPolizas();
    const index = polizas.findIndex(p => p.id_poliza === req.params.id);
    
    if (index === -1) {
        return res.status(404).json({ error: 'Póliza no encontrada' });
    }
    
    // Mantener el ID original y la matrícula original
    polizas[index] = {
        id_poliza: polizas[index].id_poliza,  // No se cambia
        matricula: polizas[index].matricula,  // No se cambia
        vigencia: req.body.vigencia,
        edad_coche: req.body.edad_coche,
        edad_tomador: req.body.edad_tomador,
        cilindrada: req.body.cilindrada,
        cilindros: req.body.cilindros,
        transmision: req.body.transmision,
        comb_electrico: req.body.comb_electrico,
        peso: req.body.peso,
        siniestro: req.body.siniestro
    };
    
    escribirPolizas(polizas);
    res.json(polizas[index]);
});

// DELETE - Eliminar póliza
app.delete('/polizas/:id', (req, res) => {
    let polizas = leerPolizas();
    const nuevaLista = polizas.filter(p => p.id_poliza !== req.params.id);
    
    if (polizas.length === nuevaLista.length) {
        return res.status(404).json({ error: 'Póliza no encontrada' });
    }
    
    escribirPolizas(nuevaLista);
    res.status(204).send();
});

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});