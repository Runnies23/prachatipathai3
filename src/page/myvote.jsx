import Navbar from "../component/navbar";
import Footer from "./footer";
import Selectprovince from "../component/myvoteselect";
import Candidatedetail from "../component/Candidatedetail";

const Vote = () => {

   return (
    <div className=" font-thaifont">
      <Navbar/>   
      <Selectprovince/>
      <Candidatedetail/>
      <Footer/>
    </div>
   );
 };
 
 export default Vote;
 
 