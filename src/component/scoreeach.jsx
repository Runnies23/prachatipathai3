import { Link } from "react-router-dom";
import picture from '../assets/picture/profile.jpg'
const EachScore20 = () => {

   return (
        <div className="w-4/6 h-20 bg-white rounded-full flex items-center gap-2">
            <div className="w-1/4 h-5/6 pl-1 flex  overflow-visible justify-center items-center">
                <div className=' flex justify-end  ml-4 bg-gray-500 bg-opacity-70 rounded-3xl h-full px-1'>
                    <div className="text-5xl flex items-center mr-2 text-orange-500">1</div>
                    <div className="flex items-center">
                        <img src={picture} className="size-12"/>
                    </div>
                    
                </div>
            </div>
            <div className="w-3/4 h-5/6  gap-0">
                <div className="">ชื่อพรรค</div>
                <div className="text-black">นายนายก ตัวจริง</div>
                <div className="flex items-center gap-2">
                    <div className="w-2/3 h-3 bg-gray-300 rounded-full"></div>
                    <div className=" text-sm text-black">XXXX</div>
                </div>
                <div className="w-1/2 h-3 bg-orange-400 relative -top-4 rounded-l-full"></div>
            </div>
        </div>
   );
 };
 
 export default EachScore20;
 
 