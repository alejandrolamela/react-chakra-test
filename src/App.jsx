import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Info from "./pages/Info";
import InfoDetail from "./pages/InfoDetail";
import NavBar from "./components/NavBar";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    
    <Box p='30px'>
     <Router>
    <NavBar />
     
        <Routes>
          {/* El path se pone para indicar la ruta de la pagina y element pondremos el componente que queremos ejecutar, 
    para eso crearemos una pagina llamada Home y dentro de esta el componente con racfe */}
          <Route path="/home" element={<Home />} />
          {/* Esta ruta con el * indica que cuando no se ponga bien la ruta que queremos, nos llevara a la pagina home */}
          <Route path="*" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/info/:id" element={<InfoDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Box>
      
   
  );
}

export default App;
