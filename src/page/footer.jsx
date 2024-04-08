import { Link } from "react-router-dom";

const Footer = () => {

   return (
    <div className='  bg-navbar w-full h-96 flex justify-end items-center font-thaifont'>
         <div className=" h-5/6 w-2 bg-background"></div>
         <div className="flex flex-col justify-center items-start gap-y-6 w-auto ml-20 round text-white text-2xl  pr-40">
            <div className="flex justify-center items-center gap-4 ">
               <div className="h-12 w-12 bg-buttonmainbgcolr rounded-lg"></div>
               <div>ติดต่อ 0x-xx-xx-xxxx</div>
            </div>
            <div className="flex justify-center items-center gap-4 ">
               <div className="h-12 w-12 bg-buttonmainbgcolr rounded-lg"></div>
               <div>ติดต่อ 0x-xx-xx-xxxx</div>
            </div>
            <Link to="/report" className="flex justify-center items-center gap-4 ">
               <div className="h-12 w-12 bg-buttonmainbgcolr rounded-lg"></div>
               <div>รายงานสถานการณ์ผิดปกติ</div>
            </Link>
         </div>

    </div>
   );
 };
 
 export default Footer;
 
 