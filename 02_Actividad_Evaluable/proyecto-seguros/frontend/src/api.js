const API = 'http://localhost:3000/polizas';

export const getPolizas = async () => {
    const res = await fetch(API);
    return res.json();
};

export const crearPoliza = async (poliza) => {
    const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(poliza)
    });
    return res.json();
};

export const actualizarPoliza = async (id, poliza) => {
    const res = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(poliza)
    });
    return res.json();
};

export const eliminarPoliza = async (id) => {
    await fetch(`${API}/${id}`, { method: 'DELETE' });
};