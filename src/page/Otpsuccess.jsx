import { Link } from 'react-router-dom';
import logo from '../assets/picture/Seal_of_the_Parliament_of_Thailand.svg.png'
const Otpsuccess = () => {

    return (
    <div className="w-full h-screen flex overflow-hidden font-thaifont">
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
            <div className='h-full w-full   flex justify-center items-center rounded-full  '>
                <svg className="h-1/2 w-2/3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
            </div>
            <Link to="/" className='btn'>backtohome</Link>
        </div>
    </div>
    );
  };
  
  export default Otpsuccess;