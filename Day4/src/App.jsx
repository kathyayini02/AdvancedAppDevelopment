import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/NavBar";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Adminlogin from "./pages/Adminlogin";
import Userlogin from "./pages/Userlogin";
import User from "./pages/User";
import Signin from "./pages/Signin";
import Admin from "./pages/Admin";
import Sidebar from "./pages/Sidebar";
import Details from "./pages/Details";
import Enroll from "./pages/Enroll";
import Profile from "./pages/Profile";
import Academydetails from "./pages/Academydetails";
import { AcademyProvider } from './AcademyContext';
import Academy from "./pages/Academy";
import ManageUsers from "./pages/ManageUsers";
import AdminAcademydetail from "./pages/AdminAcademydetail";

function App(){
  return(
    <AcademyProvider>
      
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        <Route path="/userlogin" element={<Userlogin/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/sidebar" element={<Sidebar/>}/>
        <Route path="/academy" element={<Academy/>}/>
        <Route path="/user/details" element={<Details/>}/>
        <Route path="/user/enroll" element={<Enroll/>}/>
        <Route path="/user/profile" element={<Profile/>}/>
        <Route path="/user/academy-details" element={<Academydetails/>}/>
        <Route path="/admin/manageusers" element={<ManageUsers/>}/>
        <Route path="/admin/academydetail" element={<AdminAcademydetail/>}/>

      </Routes>
    </Router>
    </AcademyProvider>
  )
}
export default App;