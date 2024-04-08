import { Link } from "react-router-dom";
import vote from '../assets/picture/vote.png'
const Myvoteevidence = () => {

  return (
   <div className=' w-full h-screen font-thaifont'>
      <div className="w-full h-5/6 pt-52 flex flex-col justify-center ">
         <div className="w-full h-full  flex flex-col items-center gap-10">
            <div className="text-black text-5xl">ผลการเลือกตั้งของฉัน</div>
            <img src={vote} className="h-5/6"/>
         </div>
         <div className="flex pt-4 justify-end mr-14 items-center"> 
            <div className=" text-red-500 text-xl">
            *ดาวน์โหลดเป็นหลักฐานในการโหวต*
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 text-black">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
            </svg>
         </div>
      </div>
  </div>
  );
};

export default Myvoteevidence;