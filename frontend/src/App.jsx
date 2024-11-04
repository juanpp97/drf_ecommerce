import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from '@/pages/Index';
import Catalogo from '@/pages/Catalogo';
import Error404 from '@/pages/Error404';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <Index /> } />
          <Route exact path="/catalogo" element={ <Catalogo /> } />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

