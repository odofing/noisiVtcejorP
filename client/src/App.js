import React from 'react'
import { Container } from 'react-bootstrap'
import './App.css'
import { Col, Row } from 'react-bootstrap'
import Accordion1 from './Components/Accordions/Accordion'


function App() {
  return (
    <>
      <Container>
        <Row>
          <Col md={8} className='m-auto mt-3'>
            <Accordion1 />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
