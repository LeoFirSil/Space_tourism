import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Tecnology from './pages/Tecnology'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/destination" element={<Destination />} />
    <Route path="/crew" element={<Crew />} />
    <Route path="/tecnology" element={<Tecnology />} />
  </Routes>
)

export default Rotas
