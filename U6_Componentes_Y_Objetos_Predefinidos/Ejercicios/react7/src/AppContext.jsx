import React from "react";
export const valoresDefecto = {
    titulo: "Título desde el contexto",
    color: "red",
};
export const AppContext = React.createContext(valoresDefecto);
