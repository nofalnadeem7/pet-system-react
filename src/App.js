//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateRoute from './components/PrivateComponent';
import Login from './components/Login';
import AddPet from './components/AddPet';
import PetList from './components/PetList';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Nav />  
      <Routes>
        <Route element={< PrivateRoute />}>
      <Route path="/" element={<PetList/>}/>
        <Route path="/add" element={<AddPet/>}/>
        <Route path="/logout" element={<h1>Logout Now</h1>}/>
        <Route path="/profile" element={<h1>Check Profile</h1>}/>
        </Route>
        <Route path="/signup" element={<Signup></Signup>}/>
        <Route path="/login" element={<Login></Login>}/>
        </Routes>   
     </BrowserRouter>
     <Footer /> 
    </div>
  );
}

export default App;
