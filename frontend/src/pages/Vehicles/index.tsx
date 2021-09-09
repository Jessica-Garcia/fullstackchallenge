import React, {useState, useEffect} from "react";
import { Table, Badge, Button } from "react-bootstrap";
import { useHistory } from "react-router"; 
import api from "../../services/api";
import moment from 'moment';

import './index.css';

interface IVehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  plate: string;
  created_at: Date;
}

const Vehicles: React.FC = () => {

  const [vehicles, setVehicles] = useState<IVehicle[]>([]);
  const history = useHistory();

  useEffect(()=> {
    loadVehicles()
  }, []);

  async function loadVehicles() {
    const response = await api.get('/vehicles');
    console.log(response);
    setVehicles(response.data);
  }

  function formatDate(date: Date){
    return moment(date).format("DD-MM-YYYY");
  }

  function newVehicle () {
    history.push('/vehicles_register');
  }

  return(
    <div className="container">
      <br />
      <div className="vehicle-header">
        <h1>Veículos</h1>
        <Button variant="dark" size="sm" onClick={newVehicle}>Cadastrar veículo</Button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Versão</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Data de cadastro</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>

          {
            vehicles.map(vehicle => (
              <tr key={vehicle.plate}>
                <td>{vehicle.brand}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.version}</td>
                <td>{vehicle.year}</td>
                <td>{vehicle.plate}</td>
                <td>{formatDate(vehicle.created_at)}</td>
                <td>
                  <Button size="sm" variant="info">Editar</Button>{' '}
                  <Button size="sm" variant="danger">Remover</Button>{' '}
                </td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  ) 
}

export default Vehicles;