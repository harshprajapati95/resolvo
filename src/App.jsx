import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AccessProvider } from './context/AccessContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import RequestAccessModal from './components/modals/RequestAccessModal'
import Index from './pages/Index'
import Product from './pages/Product'
import Solutions from './pages/Solutions'
import Pricing from './pages/Pricing'
import Customers from './pages/Customers'

export default function App() {
  return (
    <AccessProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/product" element={<Product />} />
              <Route path="/solutions" element={<Solutions />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/customers" element={<Customers />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <RequestAccessModal />
      </BrowserRouter>
    </AccessProvider>
  )
}
