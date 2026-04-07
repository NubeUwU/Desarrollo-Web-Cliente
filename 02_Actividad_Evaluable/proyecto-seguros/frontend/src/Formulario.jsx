import { useState, useEffect } from 'react';
import { crearPoliza, actualizarPoliza, getSiguienteId } from './api';

function Formulario({ polizaEditar, onGuardado }) {
    const [form, setForm] = useState({
        vigencia: '',
        matricula: '',
        edad_coche: '',
        edad_tomador: '',
        cilindrada: '',
        cilindros: '',
        transmision: 'Manual',
        comb_electrico: 'Combustión',
        peso: '',
        siniestro: 0
    });
    const [siguienteId, setSiguienteId] = useState('');
    const [error, setError] = useState('');

    // Cargar el siguiente ID disponible cuando se abre el formulario para crear
    useEffect(() => {
        if (!polizaEditar) {
            cargarSiguienteId();
        }
    }, [polizaEditar]);

    const cargarSiguienteId = async () => {
        const id = await getSiguienteId();
        setSiguienteId(id);
    };

    // Cuando se edita, cargar los datos de la póliza
    useEffect(() => {
        if (polizaEditar) {
            setForm({
                vigencia: polizaEditar.vigencia,
                matricula: polizaEditar.matricula,
                edad_coche: polizaEditar.edad_coche,
                edad_tomador: polizaEditar.edad_tomador,
                cilindrada: polizaEditar.cilindrada,
                cilindros: polizaEditar.cilindros,
                transmision: polizaEditar.transmision,
                comb_electrico: polizaEditar.comb_electrico,
                peso: polizaEditar.peso,
                siniestro: polizaEditar.siniestro
            });
        } else {
            setForm({
                vigencia: '',
                matricula: '',
                edad_coche: '',
                edad_tomador: '',
                cilindrada: '',
                cilindros: '',
                transmision: 'Manual',
                comb_electrico: 'Combustión',
                peso: '',
                siniestro: 0
            });
        }
    }, [polizaEditar]);

    const validar = () => {
        // Validar matrícula
        if (!form.matricula.match(/^\d{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/)) {
            return 'Matrícula: 4 números y 3 letras (ej: 1234ABC)';
        }
        // Validar vigencia
        if (form.vigencia < 1 || form.vigencia > 21) {
            return 'Vigencia entre 1 y 21 meses';
        }
        // Validar edad coche
        if (form.edad_coche < 0 || form.edad_coche > 10) {
            return 'Edad del coche entre 0 y 10 años';
        }
        // Validar edad tomador
        if (form.edad_tomador < 18 || form.edad_tomador > 90) {
            return 'Edad del tomador entre 18 y 90 años';
        }
        // Validar campos obligatorios
        if (!form.cilindrada || !form.cilindros || !form.peso) {
            return 'Todos los campos son obligatorios';
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const err = validar();
        if (err) {
            setError(err);
            return;
        }
        setError('');

        const datos = {
            vigencia: Number(form.vigencia),
            matricula: form.matricula.toUpperCase(),  // Convertir a mayúsculas
            edad_coche: Number(form.edad_coche),
            edad_tomador: Number(form.edad_tomador),
            cilindrada: Number(form.cilindrada),
            cilindros: Number(form.cilindros),
            transmision: form.transmision,
            comb_electrico: form.comb_electrico,
            peso: Number(form.peso),
            siniestro: Number(form.siniestro)
        };

        if (polizaEditar) {
            await actualizarPoliza(polizaEditar.id_poliza, datos);
            alert('Póliza actualizada');
        } else {
            await crearPoliza(datos);
            alert(`Póliza creada con ID: ${siguienteId}`);
        }
        
        onGuardado(); // Limpiar formulario y recargar tabla
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
            <h2>{polizaEditar ? 'Editar Póliza' : 'Nueva Póliza'}</h2>
            
            {!polizaEditar && (
                <p><strong>Próximo ID disponible: {siguienteId}</strong></p>
            )}
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    
                    {polizaEditar && (
                        <div>
                            <label>ID Póliza: </label>
                            <input type="text" value={polizaEditar.id_poliza} disabled />
                        </div>
                    )}
                    
                    {polizaEditar && (
                        <div>
                            <label>Matrícula: </label>
                            <input type="text" value={form.matricula} disabled />
                        </div>
                    )}
                    
                    {!polizaEditar && (
                        <input type="text" placeholder="Matrícula (1234ABC)" value={form.matricula}
                            onChange={e => setForm({...form, matricula: e.target.value.toUpperCase()})} required />
                    )}
                    
                    <input type="number" placeholder="Vigencia (1-21 meses)" value={form.vigencia}
                        onChange={e => setForm({...form, vigencia: e.target.value})} required />
                    
                    <input type="number" placeholder="Edad coche (0-10 años)" value={form.edad_coche}
                        onChange={e => setForm({...form, edad_coche: e.target.value})} required />
                    
                    <input type="number" placeholder="Edad tomador (18-90 años)" value={form.edad_tomador}
                        onChange={e => setForm({...form, edad_tomador: e.target.value})} required />
                    
                    <input type="number" placeholder="Cilindrada (cc)" value={form.cilindrada}
                        onChange={e => setForm({...form, cilindrada: e.target.value})} required />
                    
                    <input type="number" placeholder="Cilindros" value={form.cilindros}
                        onChange={e => setForm({...form, cilindros: e.target.value})} required />
                    
                    <select value={form.transmision} onChange={e => setForm({...form, transmision: e.target.value})}>
                        <option>Manual</option>
                        <option>Automática</option>
                    </select>
                    
                    <select value={form.comb_electrico} onChange={e => setForm({...form, comb_electrico: e.target.value})}>
                        <option>Combustión</option>
                        <option>Eléctrico</option>
                    </select>
                    
                    <input type="number" placeholder="Peso (kg)" value={form.peso}
                        onChange={e => setForm({...form, peso: e.target.value})} required />
                    
                    <select value={form.siniestro} onChange={e => setForm({...form, siniestro: e.target.value})}>
                        <option value={0}>No</option>
                        <option value={1}>Sí</option>
                    </select>
                </div>
                <br />
                <button type="submit">{polizaEditar ? 'Actualizar' : 'Crear'}</button>
                {polizaEditar && <button type="button" onClick={onGuardado}>Cancelar</button>}
            </form>
        </div>
    );
}

export default Formulario;