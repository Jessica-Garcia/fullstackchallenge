import React, {useState, useEffect} from "react";
import { Button, Form, Col, Row } from "react-bootstrap";
import api from "../../../services/api";


import '../index.css';

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

  return(
    <div className="container">
      <br />
      <div className="vehicle-header">
        <h3>Novo Veículo</h3>
        <Button variant="dark" size="sm">Voltar</Button>
      </div>
      <br />
      <div className="container">
      <Form>
          <Row className="mb-3">
            <Form.Group as={Col} >
              <Form.Label>Marca</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Modelo</Form.Label>
              <Form.Control type="select"/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col}>
              <Form.Label>Versão</Form.Label>
              <Form.Control type="text"/>
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Ano</Form.Label>
              <Form.Control type="number"/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Col xs={6}>

              <Form.Group as={Col}>
                <Form.Label>Placa</Form.Label>
                <Form.Control type="text"/>
              </Form.Group>
            </Col>
 

          </Row>

          <Button variant="primary" type="submit">
            Salvar
          </Button>
      </Form>
      {/*<Form>
          <Form.Group>
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>

          <Form.Group>
            <Form.Label>Modelo</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Versão</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Ano</Form.Label>
            <Form.Control type="number"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Placa</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
      </Form>*/}
      </div>
    </div>
  ) 
}

export default Vehicles;