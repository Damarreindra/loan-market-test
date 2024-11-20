import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashboardPage from "./Pages/DashboardPage"
import BankProduct from "./Pages/BankProduct"
import DetailBankProduct from "./Pages/DetailBankProduct"
import EditBankProduct from "./Pages/EditBankProduct"
import EditApplication from "./Pages/EditApplication"

function App() {
 return(
 <Router>
  <Routes>
  <Route path="/" element={<DashboardPage/>}/>
    <Route path="/dashboard" element={<DashboardPage/>}/>
    <Route path="/dashboard/product/bank-product" element={<BankProduct />} />
    <Route path="/dashboard/product/bank-product/:slug/detail" element={<DetailBankProduct />} />
    <Route path="/dashboard/product/bank-product/:slug/edit" element={<EditBankProduct />} />
    <Route path="/dashboard/edit-application" element={<EditApplication />} />

  </Routes>
 </Router>
 )

}

export default App
