import Header from './Header';
import { Container, Row ,Col} from 'reactstrap';
import { Dropdown , DropdownToggle,DropdownMenu, DropdownItem} from 'reactstrap';
import React, { useState } from 'react';
import CoPic from '../assets/cooking.jpg';

const Cooking =()=>{

 const [open, setOpen] = useState(false);

     return(
            <Container>
                <Row>
                    <Col>
                    <br/><br/>
                        <h1 className='coTitle'>Cooking Course </h1>
                        <br/><br/>
                         <Dropdown isOpen={open} toggle={() => setOpen(!open)}>
                         <DropdownToggle caret className='desc-btn'><strong>Description</strong></DropdownToggle>
                         </Dropdown>
                         <br/>

                         {open && (
                         <h6 className='dropdown-small'>
                         The cooking course helps people learn how to cook
                         simple and tasty food. It teaches how to use ingredients,
                         cook safely, and make food look nice. It's a fun way to learn 
                         new cooking skills!
                        </h6>
                         )}


                        <h5 className='details'><strong>Age :</strong> 18-30</h5>
                        <h5 className='details'><strong>Duration :</strong> 6 Days <br/> 4 to 6 PM</h5>
                        <h5 className='details'><strong>Price :</strong> 10 OMR</h5>

                    </Col>

                    <Col md="6" className="right-section"
                    style={{ borderTopLeftRadius: "600px",
                    borderBottomLeftRadius: "600px",
                    height: "100vh" }}>
                        
                        <img src={CoPic} width={430} height={520} className='coPic' />
                              
                        

                    </Col>
                </Row>
            </Container>
        )
}
export default Cooking;