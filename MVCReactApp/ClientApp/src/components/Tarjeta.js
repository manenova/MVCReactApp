const Tarjet = (props) => {
    return (
        <div className="card text-center bg-dark mt-5">
            <div className="card-body">
                <h1 className="card-title text-info">{props.titulo || "Titulo de la tarjeta"}</h1>
                <p className="card-text text-light">{props.description || "Descripción"}</p>
                <button className="btn btn-danger">{props.textoButton || "Click Aquí"} </button>
            </div>
        </div>
    )

}

export default Tarjeta;