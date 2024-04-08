import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/homepage';
import Registerpage from './page/register';
import LoginPage from './page/login';
import Globalscore from './page/score';
import Vote from './page/myvote';
import Myvote from './page/myvotemain';
import Getotp from './page/getotp';
import Evidence from './component/Evidence';
import Test from './component/otpbox';
import Otpsuccess from './page/Otpsuccess';
import Report from './page/report';
import Reporttest from './page/testreport';
import Globalscoretest2 from './page/globalscore20';
// Other imports...

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'white', minHeight: '100vh' }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Registerpage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/scorebefore' element={<Globalscore/>} />
          <Route path='/score' element={<Globalscoretest2/>} />
          <Route path='/vote' element={<Vote/>}/>
          <Route path='/myvote' element={<Myvote/>}/>
          <Route path='/success' element={<Evidence/>}/>
          <Route path='/getotp' element={<Getotp/>}/>
          <Route path='/otpsuccess' element={<Otpsuccess/>}/>
          <Route path='/report' element={<Report/>}/>
          <Route path='/reporttest' element={<Reporttest/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
