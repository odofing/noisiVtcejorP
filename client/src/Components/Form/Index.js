import React, { useState } from 'react'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion'
import { toast } from 'react-toastify'
import { Form, Button, Col, Row } from 'react-bootstrap'

const Form2 = ({ data }) => {
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('undecided')
  const [dob, setDob] = useState('')
  const [comment, setComment] = useState('')

  //distructure data from the first form
  const { firstname, surname, email } = data

  const [nextformStep, setNextFormStep] = useState(0)

  const completeStep = () => {
    if (phone !== '' && dob !== '' && gender !== '0') {
      setNextFormStep((cur) => cur + 1)
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    if (comment) {
      setComment('')
    } else {
      toast.error('comment field cannot be empty')
    }

    try {
      const res = await axios.post('http://localhost:5000/api/posts', {
        firstname,
        surname,
        email,
        phone,
        dob,
        gender,
        comment,
      })
      res.data && toast.success(res.data.message)
      res.data && window.location.replace('/')
    } catch (error) {
      error && toast.error(error.response.data.message)
      setPhone('')
      setComment('')
      setDob('')
      setGender('')
    }
  }

  return (
    <>
      <Accordion.Item eventKey='1' defaultActiveKey='0' flush>
        <Accordion.Header>
          <h4 className='text-dark'>Step 2: More Comments</h4>
        </Accordion.Header>
        <Accordion.Body className='bgLight text-dark'>
          <Form>
            <Row className='d-flex'>
              <Col md={6} className='mt-3'>
                <Form.Group controlId='phone'>
                  <Form.Label>Telephone Number</Form.Label>
                  <Form.Control
                    type='number'
                    className='input'
                    onChange={(e) => setPhone(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} className='mt-3'>
                <Form.Group controlId='gender'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as='select'
                    onChange={(e) => setGender(e.target.value)}
                    className='input'
                  >
                    <option value=''>Select Gender</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                    <option value='undecided'>Undecided</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} className='mt-3'>
                <Form.Group controlId='date'>
                  <Form.Label>Date of Birth</Form.Label>
                  <Form.Control
                    type='date'
                    className='input'
                    onChange={(e) => setDob(e.target.value)}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col md={3} className='mt-5 button'>
                <Button
                  type='button'
                  className='btn-block bgColor'
                  onClick={completeStep}
                >
                  Next <i className='fa fa-arrow-right' aria-hidden='true'></i>
                </Button>
              </Col>
            </Row>
          </Form>
        </Accordion.Body>
      </Accordion.Item>

      {nextformStep === 1 && (
        <>
          <Accordion defaultActiveKey='0' flush>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                <h4 className='text-dark'> Step 3: Final Comments </h4>
              </Accordion.Header>
              <Accordion.Body className='bgLight text-dark mb-5'>
                <Form onSubmit={submitHandler}>
                  <Row>
                    <Col md={6}>
                      <Form.Group controlId='textarea'>
                        <Form.Label>Comments</Form.Label>
                        <Form.Control
                          type='textarea'
                          className='input textarea'
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col md={3} className='mt-5 button'>
                      <Button type='submit' className='btn-block bgColor'>
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </>
      )}
    </>
  )
}

export default Form2
