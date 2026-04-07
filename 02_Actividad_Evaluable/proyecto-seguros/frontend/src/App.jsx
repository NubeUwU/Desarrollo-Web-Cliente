import { useState } from 'react';
import Formulario from './Formulario';
import TablaPolizas from './TablaPolizas';

function App() {
    const [polizaEditar, setPolizaEditar] = useState(null);
    const [recargar, setRecargar] = useState(0);

    const handleGuardado = () => {
        setPolizaEditar(null);
        setRecargar(prev => prev + 1);
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Gestión de Pólizas de Seguro</h1>
            <Formulario polizaEditar={polizaEditar} onGuardado={handleGuardado} />
            <TablaPolizas onEditar={setPolizaEditar} recargar={recargar} />
        </div>
    );
}

export default App;