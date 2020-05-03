import React, { useState } from 'react';
import {  Modal, ModalBody, ModalFooter } from 'reactstrap';

import { Col, Container, Row } from 'reactstrap';
import taxiimg from './imges/taxi1.png';
import img5 from './imges/icon.png';
import './Form.css';
import {Form, Button} from 'reactstrap';


    const Book = (props) => {
        const {
            
            className
          } = props;
        
          const [modal, setModal] = useState(false);
        
          const toggle = () => setModal(!modal);
        
    
    
        return(
            <div>
                    <img src={taxiimg} className="float-left" alt=""/>

               <Container>
                    <Row>
                   
                    <Col className="mt-5">
                        <h3 className="text-align-center">Booking Details</h3>
                      
                    
                    </Col>
                   
                      
                      <img src={img5} className="float-right mt-3" alt=""/>
                      
                       
                     </Row>  
                </Container>
        <Form className="frm">
            
    <Row>
        <Col>
        <Col>Name</Col>
        <input class="floating__input" type="text" placeholder="Username" required/>
    <label class="floating__label" data-content="Name"></label>
        
        </Col>

        <Col>
        <Col>Contact</Col>
    <input type="text" class="floating__input"  required />
    <label class="floating__label" ></label>
 
        </Col>
    </Row>
  
          
    <Row className="mt-5">
        
        <Col>
        <Col>Issue Date</Col>
        <input type="Date" class="floating__input"  required />
    <label  class="floating__label"></label>
        
        </Col>

        <Col>
        <Col>Return Date</Col>
    <input type="Date" class="floating__input" required/>
    <label  class="floating__label" ></label>
 
        </Col>
    </Row>
    <Row className="mt-5">
        <Col>
  <h4>  <a href="/"  className="text-secondary text-decoration-none"><b>Back</b></a></h4>
        
        </Col>
        <Col>
    <Button className="btn btn-dark" onClick={toggle} >Book Car</Button>     

        
        </Col>
    </Row>
     
    </Form>
    <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>

            <h5>

                Booking Confirmed!
            </h5>
        </ModalBody>
        <img src={taxiimg} style={{width:"20%", height:"20%"}} alt=""/>

        <ModalBody>
            <Row>
                <Col>
                    <h6 className="text-secondary">You have Booked</h6>
                </Col>
                <Col>
                    <h6>BMW -X6</h6>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h6 className="text-secondary">for the duration</h6>
                </Col>
                <Col>
                    <h6>02/05/2020 - 05/05/2020</h6>
                </Col>
            </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Continue</Button>
        </ModalFooter>
      </Modal> 
            </div>
        );
    
}
export default Book;