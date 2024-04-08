const Ssmenberhomepage = () => {

    const scrollToTop = () => {
        window.scrollTo({
          top: 0, // Scroll to the top of the window
          behavior: 'smooth' // Optional: adds a smooth scrolling effect
        });
      };

    return (
       <div className='  w-full h-auto bg-white  pt-20 pb-20 font-thaifont'>
          <div className='w-full h-full justify-start  items-center flex gap-10 text-white text-3xl'>
             <div className="h-auto w-1/3 bg-button  flex">
                <div className="w-3/4 h-ssmenber text-buttonmainbgcolr text-9xl flex justify-end items-center "> 
                <div className="mb-10 mr-5">สส</div>
                </div>
                <div className="w-1/4 h-full flex flex-col text-6xl text-black items-center font-thaifont font-bold justify-center gap-4 pb-2 pt-4">
                    <div>M</div>
                    <div>E</div>
                    <div>M</div>
                    <div>B</div>
                    <div>E</div>
                    <div>R</div>
                </div>
             </div>
             <div className="h-ssmenber w-10 bg-red-400"></div>
             <div className="h-ssmenber w-4/5 ">
                <div className=" flex   pl-10 items-center  py-6"> 
                    <div className=" w-2/3  flex flex-col items-center  gap-2">
                        <div className="flex  w-5/6">
                            <input type="text" placeholder="จังหวัด" className="input input-bordered input-lg w-full bg-navbar rounded-index text-center text-2xl" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 relative right-14 text-white top-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                        <div className="flex  w-5/6">
                            <input type="text" placeholder="เขต" className="input input-bordered input-lg w-full bg-navbar rounded-index h-12  text-center text-xl" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8  invisible">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
                        </div>
                    </div>
                   <button onClick={scrollToTop} className="btn btn-ghost w-60 h-16 bg-buttonmainbgcolr text-2xl rounded-index">
                   กลับขึ้นข้างบน
                    </button>
                </div>
                <div className="flex gap-5">
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
  
  export default Ssmenberhomepage;
   