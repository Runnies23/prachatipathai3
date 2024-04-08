import { Link } from "react-router-dom";
import picture from '../assets/picture/profile.jpg'
import EachScore20 from "./scoreeach";
const Score20 = () => {

   return (
    <div className=' bg-navbar w-full font-thaifont h-auto flex justify-center pb-20'>
        <div className=" w-2/3 h-auto flex">
            <div className=" flex-col flex gap-2 flexcol  w-1/2">
                <div className="w-2/3 flex justify-center">
                    <div className="text-3xl text-white ">การเลือกตั้ง สส. แบบบัญชีรายชื่อ</div>
                </div>
                <EachScore20/>
                <EachScore20/>
                <EachScore20/>
                <EachScore20/>
                <EachScore20/>
            </div>
            <div className=" flex-col flex gap-2 flexcol  w-1/2 items-end">
                <div className="w-2/3 flex justify-center">
                    <div className="text-3xl text-white ">การเลือกตั้ง สส. แบบแบ่งเขต</div>
                </div>
                
                <EachScore20/>
                <EachScore20/>
                <EachScore20/>
                <EachScore20/>
                <EachScore20/>
            </div>
        </div>
    </div>
   );
 };
 
 export default Score20;
 
 