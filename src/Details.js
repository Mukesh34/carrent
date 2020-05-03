import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import img5 from './imges/icon.png';
import img1 from './imges/img1.jpg';
import { FaRupeeSign, FaInstagram, FaTwitter, FaLinkedin, FaEyeDropper } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';

import {Container, Row, Col} from 'reactstrap';




class Details extends React.Component{
    render(){
      return(
        <div>
            <Nav className="navbar navbar-expand-sm bg-dark navbar-light justify-content-center">
        <NavItem>
          <NavLink href="/" className="text-white">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#" className="text-white">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/#" className="text-white">contact</NavLink>
          
        </NavItem>
       
      </Nav>
      <center><img src={img5} alt=""/></center>


      <Container className="border border-light">
        <Container className="bg-white mystyle p-3 position-relative">
         <Row>
           <Col>
             <img src={img1} style={{width:"70%", height:"100%"}} className="rounded-left" alt=""/>
           </Col> 
           <Col>
                 <h5>BMW-X6</h5><br/>
                 <div className="row">
                  <div className="col-md-4 d-flex"><FaEyeDropper/>&nbsp;<h5>Blue</h5></div>
                  <div className="col-md-8 d-flex"><MdAirlineSeatReclineNormal style={{fontSize: "24px"}} />&nbsp;<h5>Seater</h5></div>
                </div>
                {/* <Col className="d-flex text-secondary">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <h5>Seater</h5><br/>
              
              </Col> */}

                <div className="row">
                  <div className="col-md-3"><h6>Rent per day:</h6></div>
                  <div className="col-md-9"><h6><FaRupeeSign/>3000</h6></div>
                </div>

                <div className="row">
                  <div className="col-md-12 d-flex">
                    <a href="/Details" className="btn btn-dark btn-lg disabled">Book Now </a>
                    <p className="text-danger mt-3">Currently unavalable!</p></div>
                </div> 

           </Col>
           
         </Row>
        </Container>



        </Container>
        <Container>
        <h3>Car Details</h3>
        <hr/>
        <button type="button" class="btn btn-secondary">
  Not Available <span class="badge badge-secondary">x</span>
</button>

        <p>
            Vehicle Number: gj 06 1998
        </p>
        <p>
            Petrol Car
        </p>
            <p>
                1.2 Kappa Dual VTVT BS6 Petrol Engine
            </p>
           <p>
           The Petrol engine is 1086 cc and 1197 cc while the LPG engine is 1086 cc. It is available with the transmission. Depending upon the variant and fuel type the i10 has a mileage of 16.95 to 20.36 kmpl. The i10 is a 5 seater Hatchback and has a length of 3585mm, width of 1595mm and a wheelbase of 2380mm.
           </p>

        </Container>
        <Container>
            <h3 className="text-secondary">Current Booking</h3>
            <hr/>
            <Row className="text-secondary">
                <Col>
                NAME
                </Col>
                <Col>
                PHONE NUMBER
                </Col>
                <Col>
                ISSUE DATE
                </Col>
                <Col>
                RETURN DATE
                </Col>
                
            </Row>
            <Row className="mt-5">
                <Col>
                John
                </Col>
                <Col>
                +919925620669
                </Col>
                <Col>
                05-05-2020
                </Col>
                <Col>
                07-05-2020
                </Col>
                
            </Row>
            <hr/>


        </Container>

        <Container>
        <h1>Rent Vroom</h1>
        <p>
          Rentvroom Pvt. Ltd.
        </p>
        <p>
          No:296, 3rd Cross Road,Jakkasandra, 1st Block, Koramangla
        </p>
        <p>
          Bengaluru, Karnataka 560034
        </p>
        </Container>

      <Container>
              <a href="/#" className="p-3 text-secondary"><FaTwitter/></a>
              <a href="/#" className="p-3 text-secondary"><FaInstagram/></a>
              <a href="/#" className="p-3 text-secondary"><FaLinkedin /></a>
              </Container>

        </div>
      );
    }
  }
  export default Details;