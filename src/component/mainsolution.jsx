const Mainsolution = () => {

   return (
      <div className='  w-full h-auto bg-white  pb-20 font-thaifont'>
         <div className='w-full h-full justify-start  items-center flex gap-10 text-white text-3xl '>
            <div className="h-96 w-1/3 bg-button flex items-center justify-end ">
               <div className=" text-9xl text-black mb-10 mr-4">พรรค</div>
            </div>
            <div className="h-96 w-10 bg-red-400"></div>
            <div className="h-96 w-5/6">
               <div className=" flex   pl-10 items-center py-6"> 
                  <input type="text" placeholder="spec policy" className="input input-bordered input-lg w-full max-w-xs bg-navbar rounded-3xl" />
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 relative right-14 text-white">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <div className="text-gray-400 text-xl">ตัวอย่างการค้นหา: แมว เศรษฐกิจ ขยะ</div>
               </div>
               <div className="flex gap-5 mr-8">
                  <div className="w-64 h-full  flex flex-col items-center" >
                     <div className="w-full h-56  bg-gray-300"></div>
                     <div className="text-red-600 text-xl align-middle">*เลือกสส.ที่ต้องการ</div>
                  </div>
                  <div className="w-64 h-full  flex flex-col items-center" >
                     <div className="w-full h-56  bg-gray-300"></div>
                     <div className="text-red-600 text-xl align-middle">*รายละเอียดสส.ของท่าน</div>
                  </div>
                  <div className="w-64 h-full flex flex-col items-center" >
                     <div className="w-full h-56  bg-gray-300"></div>
                     <div className="text-red-600 text-xl align-middle">*กด vote เพื่อเลือกตั้ง</div>
                  </div>
                  <div className="w-64 w-  h-full  flex flex-col items-center" >
                     <div className="w-full h-56  bg-gray-300"></div>
                     <div className="flex flex-col text-red-600 text-xl justify-center items-center">
                     
                        <div >*เสร็จสิ้นแล้ว</div>
                        <div>สามารถดูหลักฐานได้ที่</div>
                        <div>my vote</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
 };
 
 export default Mainsolution;
  