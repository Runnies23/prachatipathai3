import { Link } from "react-router-dom";
const Maininteract = () => {

  return (
   <div className=' w-full h-auto py-20'>
      <div className=' justify-center items-center flex  gap-12 text-white text-3xl font-thaifont'>
         <Link to="/vote" className="w-1/6 h-20 bg-buttonmainbgcolr flex justify-center items-center rounded-index drop-shadow-lg shadow-lg">สส member</Link>
         <Link to="/score" className="w-1/6 h-20 bg-buttonmainbgcolr flex justify-center items-center rounded-index drop-shadow-lg shadow-lg">score board</Link>
         <Link to="/myvote" className="w-1/6 h-20 bg-buttonmainbgcolr flex justify-center items-center rounded-index drop-shadow-lg shadow-lg">my vote</Link>
      </div>
  </div>
  );
}; 

export default Maininteract;

