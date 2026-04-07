import { useState, useEffect } from 'react';
import { crearPoliza, actualizarPoliza } from './api';

function Formulario({ polizaEditar, onGuardado }) {
    const [form, setForm] = useState({
        id_poliza: '', vigencia: '', matricula: '', edad_coche: '',
        edad_tomador: '', cilindrada: '', cilindros: '', transmision: 'Manual',
        comb_electrico: 'Combustión', peso: '', siniestro: 0
    });
    const [error, setError] = useState('');

    useEffect(() => {
        if (polizaEditar) {
            setForm(polizaEditar);
        }
    }, [polizaEditar]);

    const validar = () => {
        if (!form.id_poliza.match(/^ID\d{5}$/)) return 'ID debe ser ID00001 (5 dígitos)';
        if (!form.matricula.match(/^\d{4}[BCDFGHJKLMNPRSTVWXYZ]{3}$/)) return 'Matrícula: 4 números y 3 letras';
        if (form.vigencia < 1 || form.vigencia > 21) return 'Vigencia entre 1 y 21 meses';
        if (form.edad_coche < 0 || form.edad_coche > 10) return 'Edad coche entre 0 y 10';
        if (form.edad_tomador < 18 || form.edad_tomador > 90) return 'Edad tomador entre 18 y 90';
        if (!form.cilindrada || !form.cilindros || !form.peso) return 'Todos los campos son obligatorios';
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
            ...form,
            vigencia: Number(form.vigencia),
            edad_coche: Number(form.edad_coche),
            edad_tomador: Number(form.edad_tomador),
            cilindrada: Number(form.cilindrada),
            cilindros: Number(form.cilindros),
            peso: Number(form.peso),
            siniestro: Number(form.siniestro)
        };

        if (polizaEditar) {
            await actualizarPoliza(form.id_poliza, datos);
            alert('Póliza actualizada');
        } else {
            await crearPoliza(datos);
            alert('Póliza creada');
        }
        onGuardado();
        setForm({
            id_poliza: '', vigencia: '', matricula: '', edad_coche: '',
            edad_tomador: '', cilindrada: '', cilindros: '', transmision: 'Manual',
            comb_electrico: 'Combustión', peso: '', siniestro: 0
        });
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', marginBottom: '20px' }}>
            <h2>{polizaEditar ? 'Editar Póliza' : 'Nueva Póliza'}</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <input type="text" placeholder="ID (ID00001)" value={form.id_poliza}
                        onChange={e => setForm({...form, id_poliza: e.target.value})}
                        disabled={!!polizaEditar} required />

                    <input type="number" placeholder="Vigencia (1-21 meses)" value={form.vigencia}
                        onChange={e => setForm({...form, vigencia: e.target.value})} required />

                    <input type="text" placeholder="Matrícula (1234ABC)" value={form.matricula}
                        onChange={e => setForm({...form, matricula: e.target.value})}
                        disabled={!!polizaEditar} required />

                    <input type="number" placeholder="Edad coche (0-10)" value={form.edad_coche}
                        onChange={e => setForm({...form, edad_coche: e.target.value})} required />

                    <input type="number" placeholder="Edad tomador (18-90)" value={form.edad_tomador}
                        onChange={e => setForm({...form, edad_tomador: e.target.value})} required />

                    <input type="number" placeholder="Cilindrada" value={form.cilindrada}
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