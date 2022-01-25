import React from 'react';
import { Row, Container, Card } from 'react-bootstrap';
import satellite from '../images/satellite.jpg';
import flight from '../images/flight.png'
import mic from '../images/mic.jpg'
import set from '../images/settings.png'

const Category = () => {
  return (
    <Container style={{textAlign:'center', paddingTop: '10vh'}}>
      <Row >
        <h6>Category</h6>
      </Row>
      <Row>
        <h1>We Offer Best Services</h1>
      </Row>

      <Row xs={1} md={4} style = {{paddingTop: '5vh'}}>
        <Card border='light' style={{paddingRight:'5%'}}>
          <Card.Img variant='top' src={`${satellite}`} height = '50%'/>
          <Card.Body>
            <Card.Title>Calculated Weather</Card.Title>
            <Card.Text>
              Built Wicket longer admire do barton vanity itself do in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border='light' style={{paddingRight:'5%'}}>
          <Card.Img variant='top' src={`${flight}`} height = '50%'/>
          <Card.Body>
            <Card.Title>Best Flights</Card.Title>
            <Card.Text>
              Built Wicket longer admire do barton vanity itself do in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border='light' style={{paddingRight:'5%'}}> 
          <Card.Img variant='top' src={`${mic}`} height = '50%'/>
          <Card.Body>
            <Card.Title>Local Events</Card.Title>
            <Card.Text>
              Built Wicket longer admire do barton vanity itself do in it.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border='light'>
          <Card.Img variant='top' src={`${set}`} height = '50%'/>
          <Card.Body>
            <Card.Title>Customization</Card.Title>
            <Card.Text>
              Built Wicket longer admire do barton vanity itself do in it.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Category;
