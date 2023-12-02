import { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [empleados, setEmpleados, forecasts, setForecasts] = useState();

    useEffect(() => {
        populateWeatherData();
        populateEmpleadosData();
    }, []);

    const contents = forecasts === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.date}>
                        <td>{forecast.date}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    const contents2 = empleados === undefined
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre </th>
                    <th>Correo</th>
                    <th>Dirección</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                {empleados.map(empleado =>
                    <tr key={empleado.idEmpleado}>
                        <td>{empleado.idEmpleado}</td>
                        <td>{empleado.nombre}</td>
                        <td>{empleado.correo}</td>
                        <td>{empleado.direccion}</td>
                        <td>{empleado.telefono}</td>
                    </tr>
                )}
            </tbody>
        </table>;

    return (
        <div>
            <h1 id="tabelLabel">Weather forecast & Empleados</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            {contents2 }
        </div>
    );
    
    async function populateWeatherData() {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
    }

    async function populateEmpleadosData() {
        const response = await fetch('empleados');
        const data = await response.json();
        setEmpleados(data);
    }

}

export default App;