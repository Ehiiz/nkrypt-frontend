import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Landing from './pages/Landing';
import Access from './pages/Access';
import Quizpage from './pages/Quizpage';
import Passcodepage from './pages/Passcodepage';
import Unlocked from './pages/Unlocked';
import Createkrypt from './pages/Createkrypt';
import Choices from './pages/Choices';


function App() {
  return (
    <div className="font-poppins bg-secondary-600">
      <Router>
       <Routes>
        <Route path="/profile" exact element={<Profile />}/>
        <Route path="/" exact element={<Signin />}/>
        <Route path="/signup" exact element={<Signup />}/>
        <Route path="/home" exact element={<Home />}/> 
        <Route path="/notifications" exact element={<Notifications />}/>
        <Route path="/kryptpage" exact element={<Landing />}/>
        <Route path="/access" exact element={<Access />}/>
        <Route path="/quiz" exact element={<Quizpage />}/>
        <Route path="/passcode" exact element={<Passcodepage />}/>
        <Route path="/unlocked" exact element={<Unlocked />}/>
        <Route path="/create" exact element={<Createkrypt />}/>
        <Route path="/choice" exact element={<Choices />} />
       </Routes>
    </Router>


    </div>

  

     

      

  );
}

export default App;
