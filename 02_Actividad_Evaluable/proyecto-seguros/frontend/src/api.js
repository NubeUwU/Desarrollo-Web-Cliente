const API = 'http://localhost:3000/polizas';

export const getPolizas = async () => {
    const res = await fetch(API);
    return res.json();
};

// Obtener el siguiente ID disponible
export const getSiguienteId = async () => {
    const res = await fetch('http://localhost:3000/siguiente-id');
    const data = await res.json();
    return data.id;
};

// Crear póliza (NO se envía el ID, el backend lo genera)
export const crearPoliza = async (poliza) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(poliza)  // No incluye id_poliza
    });
    return res.json();
};

// Actualizar póliza (no se envía matrícula)
export const actualizarPoliza = async (id, poliza) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(poliza)  // No incluye id_poliza ni matricula
    });
    return res.json();
};

export const eliminarPoliza = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
};