

import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Characters from './pages/Characters';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
<>
  <Router>
    <Routes>
    {/* El path se pone para indicar la ruta de la pagina y element pondremos el componente que queremos ejecutar, 
    para eso crearemos una pagina llamada Home y dentro de esta el componente con racfe */}
      <Route path='/home' element={<Home/>} />
      {/* Esta ruta con el * indica que cuando no se ponga bien la ruta que queremos, nos llevara a la pagina home */}
      <Route path='*' element={<Home/>} />
      <Route path='/characters' element={<Characters/>} />
      <Route path='/characters/:id' element={<CharacterDetail/>} />
    </Routes>
  </Router>
</>
  );
}

export default App;
