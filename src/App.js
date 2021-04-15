import './App.css';
import TopNavbar from './Pages/Components/topnavbar';
import Container from 'react-bootstrap/Container';
import Footer from './Pages/Components/Footer';
import Profile from './Pages/Components/Profile';
import Mainarea from './Pages/Components/Mainarea';
import './Pages/Components/body.css';


function App() {
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.height = "100%"
  document.documentElement.style.height = "100%"
  return (
    <div>
      <Container fluid="sm" className="maincontainer">
        <TopNavbar/>
        <br/>
        <Mainarea/>
      </Container>
      <Footer/>
    </div>
    

  );
}

export default App;
