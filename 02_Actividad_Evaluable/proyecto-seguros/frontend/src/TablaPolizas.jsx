import { useState, useEffect } from 'react';
import { getPolizas, eliminarPoliza } from './api';

function TablaPolizas({ onEditar, recargar }) {
    const [polizas, setPolizas] = useState([]);

    useEffect(() => {
        cargar();
    }, [recargar]);

    const cargar = async () => {
        const datos = await getPolizas();
        setPolizas(datos);
    };

    const borrar = async (id) => {
        if (confirm('¿Eliminar esta póliza?')) {
            await eliminarPoliza(id);
            cargar();
        }
    };

    return (
        <div>
            <h2>Listado de Pólizas</h2>
            <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead style={{ backgroundColor: '#f0f0f0' }}>
                    <tr>
                        <th>ID</th><th>Vigencia</th><th>Matrícula</th>
                        <th>Edad Coche</th><th>Edad Tomador</th>
                        <th>Cilindrada</th><th>Cilindros</th>
                        <th>Transmisión</th><th>Tipo</th><th>Peso</th>
                        <th>Siniestro</th><th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {polizas.map(p => (
                        <tr key={p.id_poliza}>
                            <td>{p.id_poliza}</td>
                            <td>{p.vigencia} meses</td>
                            <td>{p.matricula}</td>
                            <td>{p.edad_coche}</td>
                            <td>{p.edad_tomador}</td>
                            <td>{p.cilindrada}</td>
                            <td>{p.cilindros}</td>
                            <td>{p.transmision}</td>
                            <td>{p.comb_electrico}</td>
                            <td>{p.peso} kg</td>
                            <td>{p.siniestro === 1 ? 'Sí' : 'No'}</td>
                            <td>
                                <button onClick={() => onEditar(p)}>✏️ Editar</button>
                                <button onClick={() => borrar(p.id_poliza)}>🗑️ Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TablaPolizas;