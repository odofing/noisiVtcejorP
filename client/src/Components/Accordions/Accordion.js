import React, { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import Accordion from 'react-bootstrap/Accordion'
import { Form, Button, Col, Row } from 'react-bootstrap'
import Form2 from '../Form/Index'

const Accordion1 = () => {
  const [firstname, setFirstName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [formStep, setFormStep] = useState(0)

  // pass entire data from fields as prop to the next form
  const data = {
    firstname,
    surname,
    email,
  }

  const nextStep = () => {
    if (firstname !== '' && surname !== '' && email !== '') {
      setFormStep((cur) => cur + 1)
    }
  }

  return (
    <>
      <ToastContainer />
      <Accordion defaultActiveKey='0' flush className='mt-5'>
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <h4 className='text-dark'>Step 1: Your Details</h4>
          </Accordion.Header>
          <Accordion.Body className='bgLight text-dark'>
            <Form>
              <Row className='d-flex'>
                <Col md={6}>
                  <Form.Group controlId='name'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type='text'
                      className='input'
                      onChange={(e) => setFirstName(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId='surname'>
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                      type='text'
                      className='input'
                      onChange={(e) => setSurname(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={6} className='mt-3'>
                  <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type='email'
                      className='input'
                      onChange={(e) => setEmail(e.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </Col>
                <Col md={3} className='mt-5 button'>
                  <Button type='button' className='bgColor' onClick={nextStep}>
                    Next{' '}
                    <i className='fa fa-arrow-right' aria-hidden='true'></i>
                  </Button>
                </Col>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        {formStep === 1 && (
          <>
            <Form2 data={data} />
          </>
        )}
      </Accordion>
    </>
  )
}

export default Accordion1
