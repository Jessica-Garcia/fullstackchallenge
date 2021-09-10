import React, {useState, useEffect}from 'react';
import { useHistory, useParams } from "react-router-dom";
import {Button, Card } from 'react-bootstrap';
import api from '../../../services/api';
import moment from 'moment';


interface IVehicle {
  id: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  plate: string;
  created_at: Date;
}

const Detail: React.FC = () => {

  const history = useHistory();
  const { id }: any = useParams();

  const [vehicle, setVehicle] = useState<IVehicle>();

  useEffect(() => {
    findVehicle()
  },[id])

  function back () {
    history.goBack();
  }

  async function findVehicle() {
    const response = await api.get<IVehicle>(`vehicles/${id}`);
    console.log(response);
    setVehicle(response.data);
  }

  function formatDate(date: Date | undefined){
    return moment(date).format("DD-MM-YYYY");
  }

  return (
    <div className="container">
      <br />
      <div className="vehicle-header">
        <h1>Veículo</h1>
        <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
      </div>
      <br />
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <Card.Title>{vehicle?.brand}</Card.Title>
          <Card.Text>
            {vehicle?.year}
          </Card.Text>
          <Card.Text>
            {vehicle?.model}
          </Card.Text>
          <Card.Text>
            {vehicle?.version}
          </Card.Text>
          <Card.Text>
            {vehicle?.plate}
          </Card.Text>
          <Card.Text>
            <strong>Data de cadastro: </strong>
            { formatDate(vehicle?.created_at) }
          </Card.Text>
        </Card.Body>
        <br />
      </Card>
    </div>
  );
}

export default Detail;