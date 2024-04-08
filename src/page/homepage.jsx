import Navbar from '../component/navbar';
import Logomain from '../component/Logomain';
import Maininteract from '../component/maininteract';
import Mainsolution from '../component/mainsolution';
import SelectProvice from '../component/selectprovince';
import Membercomponent from '../component/member';
import Footer from './footer';
import Ssmenberhomepage from '../component/ssmember';

export default function   Home(){
   return(
   <div className=''>
      <Navbar/>
      <Logomain/>
      <Maininteract/>
      <Mainsolution/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Ssmenberhomepage/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Membercomponent/>
      <Footer/>
   </div>
   );
}