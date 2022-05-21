
import './App.css';
import NavBar from './Components/NavBar';
import {Route,Routes} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Users from './Components/Users';
// import NoteContext from './Context/NoteContext';
// import Users from './Components/Users';
function App() {
  return (
    <>
    {/* <NoteContext.Provider value={"from appdjijdijd component"}> */}
     <NavBar/>
     
     <Routes>
       <Route exact path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/users' element={<Users/>}/>
     </Routes>
     
     {/* </NoteContext.Provider> */}
     
    </>
  );
}

export default App;
