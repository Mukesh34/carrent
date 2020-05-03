import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import img1 from './imges/img1.jpg';
import img2 from './imges/img2.jpg';
import img3 from './imges/img3.jpg';
import img4 from './imges/img4.jpg';
import img5 from './imges/icon.png';
import { FaRupeeSign, FaInstagram, FaTwitter, FaLinkedin, FaEyeDropper } from 'react-icons/fa';
import { MdAirlineSeatReclineNormal } from 'react-icons/md';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Home extends React.Component{
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
       <Container> <h3>Car for rent</h3></Container>
        <hr style={{margin:"0 0 50px 0",
    display:"block" }}/>
        {/* <Container>
        <Row>
          <Col>
          <h4>Car Details</h4>
          </Col>
          <Col>
          <h4>RENT PER DAY</h4>
          </Col>
        </Row>
        </Container> */}
        <Container className="border border-light">
        <Container className="bg-white p-3 position-relative">
         <Row>
           <Col>
             <img src={img1} style={{width:"100%", height:"100%"}} className="rounded-left" alt=""/>
           </Col> 
           <Col style={{position:"relative"}}>
          <h4 style={{position: "absolute", top: "-50px"}}>Car Details</h4>
              <h5>BMW-X6</h5>
              
              <Col className="d-flex text-secondary">
                <FaEyeDropper/>&nbsp;<h5>Black</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <MdAirlineSeatReclineNormal style={{fontSize: "24px"}} />&nbsp;<h5>Seater</h5>
              
              </Col>
              
           </Col> 
           <Col style={{position:"relative"}}>
          <h4 style={{position: "absolute", top: "-50px"}}>Rent per Day</h4>
           <h5><FaRupeeSign />3000</h5>
           </Col> 
           <Col>
          <a href="/"  className="btn btn-dark btn-lg disabled">Book Now</a>
            <h6 className="text-danger">Disabled</h6>        
              
           </Col> 
           <Col>
          <a href="/Details"  className="btn btn-light btn-lg">Details</a>

           </Col>

         </Row>
        </Container>

        </Container>

        <Container className="border border-light">
        <Container className="bg-white mystyle p-3 position-relative">
         <Row>
           <Col>
             <img src={img2} style={{width:"100%", height:"100%"}} className="rounded-left" alt=""/>
           </Col> 
           <Col>
              <h5>BMW -X6</h5>
              <Col className="d-flex text-secondary">
              <FaEyeDropper/>&nbsp; <h5>Blue</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MdAirlineSeatReclineNormal style={{fontSize: "24px"}} />&nbsp;<h5>Seater</h5>
              
              </Col>
              
              
           </Col> 
           <Col>
           <h5><FaRupeeSign />2000</h5>
           </Col> 
           <Col>
          <a href="/Book"  className="btn btn-dark btn-lg">Book Now</a>
          <h6 className="text-danger">Enable</h6>   
              
           </Col> 
           <Col>
           
          <a href="/Details1"  className="btn btn-light btn-lg">Details</a>

           </Col>

         </Row>
        </Container>

        </Container>
        <Container className="border border-light">
        <Container className="bg-white mystyle p-3 position-relative">
         <Row>
           <Col>
             <img src={img3} style={{width:"100%", height:"100%"}} className="rounded-left" alt=""/>
           </Col> 
           <Col>
              <h5>Lexus-RX-350</h5>
              <Col className="d-flex text-secondary">
              <FaEyeDropper/>&nbsp; <h5>Red</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MdAirlineSeatReclineNormal style={{fontSize: "24px"}} />&nbsp;<h5>Seater</h5>
              
              </Col>
              
             
              
           </Col> 
           <Col>
           <h5><FaRupeeSign />2500</h5>
           </Col> 
           <Col>
          <a href="/Book"  className="btn btn-dark btn-lg">Book Now</a>

              
           </Col> 
           <Col>
            
          <a href="/Details2"  className="btn btn-light btn-lg">Details</a>

           </Col>

         </Row>
        </Container>

        </Container><Container className="border border-light">
        <Container className="bg-white mystyle p-3 position-relative">
         <Row>
           <Col>
             <img src={img4} style={{width:"100%", height:"100%"}} className="rounded-left" alt=""/>
           </Col> 
           <Col>
              <h5>BMW X-3</h5>
              
              <Col className="d-flex text-secondary">
              <FaEyeDropper/>&nbsp;   <h5>White</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <MdAirlineSeatReclineNormal style={{fontSize: "24px"}} />&nbsp;<h5>Seater</h5>
              
              </Col>
              
              
           </Col> 
           <Col>
           <h5><FaRupeeSign />3000</h5>
           </Col> 
           <Col>
          <a href="/Book"  className="btn btn-dark btn-lg">Book Now</a>

            
              
           </Col> 
           <Col>
          <a href="/Details2"  className="btn btn-light btn-lg">Details</a>

            
           </Col>

         </Row>
        </Container>

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
              <a href="/#" className="p-3 text-secondary"><FaInstagram/></a>
              <a href="/#" className="p-3 text-secondary"><FaTwitter/></a>
              <a href="/#" className="p-3 text-secondary"><FaLinkedin /></a>
              </Container>
             
      </div>
    );
  }
}
export default Home;