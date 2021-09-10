import React, {useState, useEffect, ChangeEvent} from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, Col, Row } from "react-bootstrap";
import api from "../../../services/api";


import '../index.css';

interface IVehicle {
  brand: string;
  model: string;
  version: string;
  year: number;
  plate: string;
}



const Vehicles: React.FC = () => {

  const history = useHistory();
  const { id }: any = useParams();

  const [model, setModel] = useState<IVehicle>({
    brand: '',
    model: '',
    version: '',
    year: 0,
    plate: ''
  })

  useEffect(() => {
    if(id !== undefined){
      findVehicle(id);
    }
  },[id])

  function updatedModel (e: ChangeEvent<HTMLInputElement>){
    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  async function onSubmit (e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if(id !== undefined){
      await api.put(`/vehicles/${id}`, model);
    }else{
      await api.post('/vehicles', model);
    }

    back();
  }

  function back () {
    history.goBack();
  }

  async function findVehicle(id: string) {
    const response = await api.get(`vehicles/${id}`);
    setModel({
      brand: response.data.brand,
      model: response.data.model,
      version: response.data.version,
      year: response.data.year,
      plate: response.data.plate
    })
  }

  return(
    <div className="container">
      <br />
      <div className="vehicle-header">
        <h3>Novo Veículo</h3>
        <Button variant="dark" size="sm" onClick={back}>Voltar</Button>
      </div>
      <br />
      <div className="container">
      <Form onSubmit={onSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label>Marca</Form.Label>
              <Form.Control 
                type="text" 
                name="brand"
                value={model.brand} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Modelo</Form.Label>
              <Form.Control 
                type="select"
                name="model"
                value={model.model}  
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Versão</Form.Label>
              <Form.Control 
                type="text"
                name="version" 
                value={model.version} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Ano</Form.Label>
              <Form.Control 
                type="number"
                name="year"
                value={model.year}  
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>

              <Form.Group as={Col}>
                <Form.Label>Placa</Form.Label>
                <Form.Control 
                  type="text"
                  name="plate"
                  value={model.plate}  
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
                />
              </Form.Group>
            </Col>

          </Row>

          <Button variant="dark" type="submit">
            Salvar
          </Button>
      </Form>
      </div>
    </div>
  ) 
}

export default Vehicles;