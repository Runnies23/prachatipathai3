import logo from '../assets/picture/Seal_of_the_Parliament_of_Thailand.svg.png'

import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Droid Sans', 'Droid Serif']
  }
});

const Logomain = () => {

  return (
   <div className='pt-40 gap-y-10 flex flex-col bg-navbar placeholder-amber-400 pb-40'>
      <div className=' justify-center items-center flex flex-col gap-10 bg-navbar'>
         <div className=' text-red-600 text-5xl pt-6 font-thaifont font-semibold'>วิธีการลงเลือกตั้ง</div>
         <div className='w-5/6 h-60 flex gap-10 justify-center'>
            <div className='w-1/4 h-full bg-gray-400'></div>
            <div className='w-1/4 h-full bg-gray-400'></div>
            <div className='w-1/4 h-full bg-gray-400'></div>
         </div>
         <div className='w-5/6 h-60 flex gap-10  justify-center'>
            <div className='w-1/4 h-full bg-gray-400'></div>
            <div className='w-1/4 h-full bg-gray-400'></div>
            <div className='w-1/4 h-full bg-gray-400'></div>
         </div>
      </div>
   </div>
  );
};

export default Logomain;
