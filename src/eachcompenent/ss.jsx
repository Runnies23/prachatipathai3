import picture from '../assets/picture/profile.jpg'
const Eachcard = () => {

  return (
      <div className="w-52 h-auto bg-background flex flex-col justify-center items-center mb-10">
         <div className="">
            <img className= 'first:pt-0 last:pb-0 ' src={picture}/>
         </div>
         <div className="flex flex-col justify-center items-center">
            <div className='w-auto h-auto py-4  px-8 bg-button flex flex-col justify-center items-center text-xl rounded-index text-black'>profile สส</div>
         </div>
      </div>
  );
};

export default Eachcard;