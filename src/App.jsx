<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import Heropage from "./pages/Hero";
import EditProfile from "./components/EditProfile";
import ShopPage from "./components/Shop";
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
     

     </Routes>
     </Router>

    </>
  )
}

export default App
=======
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import Heropage from "./pages/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
     
    <Routes>
      {/* <Heropage /> */}
  <Route path="/" element={
    <>
      <Navbar />
      <CartPage />
      <Footer />
    </>
  } />
  <Route path="/checkout" element={
    <>
      <Navbar />
      <Checkout />
      <Footer />
    </>
  } />

     
     {/* <Route path="contactus" element={
          <>
          <Navbar/>
          <ContactPage />
          <Footer/>
          </>
        }/> */}
        

     


     {/* <ContactPage /> */}
     
     </Routes>
     </Router>

    </>
  )
}

export default App



>>>>>>> dda2cbb (cart and checkout)
