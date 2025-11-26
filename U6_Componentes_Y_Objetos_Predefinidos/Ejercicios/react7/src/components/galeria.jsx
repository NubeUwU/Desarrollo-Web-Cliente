import Ficha from "./ficha";
const Galeria = (props) => {
    const fotos = props.fotos;
    return(
        <div className="galeria">
            {
                fotos.map(
                    (f) => <Ficha key={f.id} foto={f} />
                )
            }
        </div>
    );
};
export default Galeria;