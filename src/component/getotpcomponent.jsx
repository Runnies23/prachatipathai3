import logo from '../assets/picture/Seal_of_the_Parliament_of_Thailand.svg.png'
import facebook from '../assets/picture/facebook.png'
import google from '../assets/picture/google.png'
import { Link } from 'react-router-dom';
import Otpbox from './otpbox';
const Getotpmain = () => {

  return (
   <div className='w-full h-screen flex overflow-hidden '>
      <div className=" w-3/5  h-full bg-navbar z-10 rounded-tr-background flex justify-center items-center flex-col gap-0">
         <div className=' justify-center items-center flex flex-col'>
            <img src={logo} className='h-48 mb-5   '/>
            <div className='text-4xl text-white my-5'>Solution</div>
         </div>   
         <div className='flex gap-10 justify-center items-center '>
            <div className='flex flex-col justify-center items-center gap-y-10'>
               <div className='h-24 w-24 rounded-full bg-solutionpage text-4xl flex justify-center items-center text-black'> 1</div>
               <div className='h-24 w-24 rounded-full bg-buttonmainbgcolr text-4xl flex justify-center items-center text-white'> 2</div>
               <div className='h-24 w-24 rounded-full bg-buttonmainbgcolr text-4xl flex justify-center items-center text-white'> 3</div>
               <div className=' absolute h-80 w-4 bg-white top-3/5 -z-10'></div>
            </div>
            <div className='flex flex-col justify-center items- gap-y-24 w-auto'>
               <div className='text-xl text-white'>ลงทะเบียน กรอกข้อมูลที่ระบุดังกล่าวให้ครบถ้วน</div>
               <div>
                  <div className='text-xl text-white'>รอรับรหัส OTP ผ่านช่องทางที่ท่านเลือกเพื่อยืนยันตัวตน</div>
                  <div className='text-xl text-white'>(ประมาณ3-5นาที)และสร้างรหัสผ่านตามตัวเลขบัตรประชาชน (ID card) ให้อัตโนมัติ</div>
               </div>
               <div className='text-xl text-white'>เสร็จสิ้นการลงทะเบียน</div>
            </div>

         </div>
      </div>
      <div className="w-2/5 h-full  z-20 flex flex-col items-center justify-center ">
         <div className=' w-10/12 h-96  pt-10 gap-8'>
            <div className='flex flex-col justify-center items-center '>
                <div className='text-5xl font-bold'>OTP</div>
                <div className='text-2xl'>(ประมาณ3-5นาที)</div>
            </div>
            <div className='flex my-10  justify-center items-center gap-10 text-5xl'>
               <Otpbox/>
            </div>
            <div className='flex flex-col  items-end mt-10'>
               <div className='text-black text-xl'>00:00</div>
               <div className=' text-red-600 text-xl'>ขอรหัสใหม่</div>
            </div>
         </div>
         <Link to="/otpsuccess" className='btn'>if success</Link>
      </div>
         
   </div>
  );
};

export default Getotpmain;