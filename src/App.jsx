import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import Heropage from "./pages/Hero";
import EditProfile from "./components/EditProfile";
import ShopPage from "./components/Shop";
import CardPayment from "./components/Cardpayment";
import UpiPayment from "./components/Upipayment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
     
      <Routes>
     <Route path="/" element={
          <>
          <Navbar/>
       <Heropage />
       <Footer/>
       </>
     }/>
     
     <Route path="contactus" element={
          <>
          <Navbar/>
          <ContactPage />
          <Footer/>
          </>
        }/>


      <Route path="editprofile" element={
          <>
          <Navbar/>
          <EditProfile/>
          <Footer/>
          </>
        }/>
     
     <Route path="shop" element={
          <>
          <Navbar/>
          <ShopPage/>
          <Footer/>
          </>
        }/>

        <Route path="card" element={
          <>
          <Navbar/>
          <CardPayment/>
          <Footer/>
          </>
        }/>

       <Route path="pay" element={
          <>
          <Navbar/>
          <UpiPayment/>
          <Footer/>
          </>
        }/>
     

     </Routes>
     </Router>

    </>
  )
}

export default App
