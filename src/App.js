import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './cpn/AppLayout/AppLayout';
import Qlysanpham from './cpn/Pages/Qlysanpham';
import EditProduct from './cpn/Pages/EditProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Qlysanpham />} />
            <Route path='/Voucher' element={<Qlysanpham />} />
            <Route path='/User' element={<Qlysanpham />} />
            <Route path='/Coupon' element={<Qlysanpham />} />
            <Route path='/Bill' element={<Qlysanpham />} />
            <Route path='/Edit' element={<EditProduct/>} />
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
