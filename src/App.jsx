import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Contacts from "./Components/Contacts"
import Teacher from "./Components/Teacher"

import "./Styles/App.scss"
import "./Styles/Header.scss"
import "./Styles/Home.scss"
import "./Styles/contact.scss"
import "./Styles/Footer.scss"
import "./Styles/teacher.scss"
function App(){
  return (
    <>
    <Router>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App