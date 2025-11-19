const Saludar = (props) => {
    return (
        <>
        <h2>Hola, {props.userInfo.nombre}, me he enterado de que tiene{" "} 
        {props.userInfo.edad} años y de que su color favorito es el{" "} 
        {props.userInfo.color}</h2>
        </>
    )
};

export default Saludar;