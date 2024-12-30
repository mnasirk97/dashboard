import { Route, Routes } from "react-router-dom"
import ProductsPage from "./pages/ProductsPage"
import OverviewPage from "./pages/OverviewPage"



function App() {

  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hiddenl">

      {/* BG */}
      <div className="fixed inset-0 z-0">

      </div>
      
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </div>
  )
}

export default App
