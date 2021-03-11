import React from 'react'
import { Card, Accordion } from 'react-bootstrap'
import Arrow from '../public/down_accordionarrow.svg'

const AccordionDetail = () => {
  return (
    <div className='accordion-wrapper'>
      <Accordion defaultActiveKey='0'>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='0'>
            <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='1'>
            <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='2'>
            <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='2'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='3'>
            <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='3'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='4'>
            <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='4'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='5'>
            <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='5'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey='6'>
            <img className='arrow-rotate' src={Arrow} alt='arrow' />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey='6'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default AccordionDetail
