import pic from '../assets/background.png';
import { Container, Row ,Col} from 'reactstrap';
import Header from './Header';
import { Link } from 'react-router-dom';
import actPic from '../assets/activities.jpg';


const Home=()=>{
  
    return(
        <Container>
            <Row>
                <Col>
                <h1 className='title' >Develop Your Skills  </h1>
                <h2 className='title2'>With US</h2>
                <br/>
                <br/>
            
                <h4 className='h4'> Activities available now...</h4>
                <Link to="/cooking" className='h5'>Cooking </Link> <br/>
                <Link to="/home" className='h5'>Creative & Art </Link> <br/>
                <Link to="/home" className='h5'>Photography </Link><br/>
                <Link to="/home" className='h5'>Digital & Tech Skills </Link>
                </Col>

                <Col md="6" className="d-flex justify-content-center actPic">
                <img src={actPic}  width={300} height={300} /> 
                </Col>
            </Row>
        
        </Container>
    )
     
    
}
export default Home;