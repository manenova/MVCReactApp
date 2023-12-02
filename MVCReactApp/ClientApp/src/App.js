import "bootstrap/dist/css/bootstrap.min.css"
import Tarjeta from "./components/Tarjeta";

const App = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-sm-center">
                <div className="col-sm-4">
                    <Tarjeta
                        titulo="Mane"
                        description="Mane"/>
                </div>
            </div>
        </div>
    )
}

export default App;