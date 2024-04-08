import { Link } from "react-router-dom";
import vote from '../assets/picture/vote.png'
import thia from '../assets/picture/thai.png'
const Mapscore = () => {

  return (
    <div className='w-full h-auto bg-white flex items-center flex-col pt-4'>
        <div className="w-3/4 h-auto ">
            <diV className='h-14 w-1/6 flex items-center font-thaifont text-black '>
                <div className="w-1/2 flex items-center justify-center btn bg-buttonmainbgcolr hover:bg-gray-300 rounded-l-2xl rounded-r-none h-full border-none text-black text-sm z-10">บัญชีรายชื่อ</div>
                <div className="h-full w-1  z-20"></div>
                <div className="w-1/2 flex items-center justify-center bg-buttonmainbgcolr hover:bg-gray-300 rounded-r-2xl rounded-l-none h-full btn border-none text-black text-sm z-10">แบ่งเขต</div>
            </diV>
        </div>
        <div className=" h-auto w-3/4 flex justify-end">
            <input type="text" placeholder="ค้นหารหัสไปรษณีย์ ,เขต ,จังหวัด" className="input input-bordered input-lg w-2/5 mr-10 bg-gray-300 border-black outline-2 outline-black rounded-lg h-12   text-xl text-black " />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  invisible">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
        </div>
        <div className="w-3/4 h-auto flex justify-center  my-4">

            <div className="w-1/2">
                <img className="w-96" src={thia}/>
            </div>
            <div className="w-1/2 gap-10 flex-col flex items-center justify-center">
                <div className="w-1/2 h-auto items-start flex flex-col justify-center py-7 px-16 rounded-3xl bg-gray222 text-black font-thaifont font-bold">
                    <div className="text-xl pb-4">แบบแบ่งเขต</div>
                    <di className='text-2xl'>400 เขต</di>
                    <div className="text-xl">นับแล้ว 99%</div>
                    <div className=" pt-4">
                    26/03/2567 เวลา 16:00 น.
                    </div>
                </div>
                <div className="w-1/2 h-auto items-start flex flex-col justify-center py-7 px-16 rounded-3xl bg-gray222 text-black font-thaifont font-bold">
                    <div className="text-xl pb-4">บัญชีรายชื่อ</div>
                    <di className='text-2xl'>100 ที่นั่ง</di>
                    <div className="text-xl">นับแล้ว 99%</div>
                    <div className=" pt-4">
                    26/03/2567 เวลา 16:00 น.
                    </div>
                </div>
            </div>
        </div>
        <div className="h-96 w-full bg-background"></div>
    </div>
  );
};

export default Mapscore