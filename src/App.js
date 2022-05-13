import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Notifications from './pages/Notifications';
import Landing from './pages/Landing';
import Setlock from './pages/Setlock';
import Quiz from './pages/Quiz';
import Passcode from './pages/Passcode';
import Unlocked from './pages/Unlocked';
import Createkrypt from './pages/Createkrypt';
import Multichoice from './pages/Multichoice';
import Success from './pages/Success';
import Settings from './pages/Settings';
import Answerpass from './pages/Answerpass';
import AnswerQuiz from './pages/AnswerQuiz';
import Answermulti from './pages/Answermulti';


function App() {
  return (
    <div className="font-poppins bg-secondary-600">
      <Router>
       <Routes>
        <Route path="/profile/:id" exact element={<Profile />}/>
        <Route path="/signin" exact element={<Signin />}/>
        <Route path="/signup" exact element={<Signup />}/>
        <Route path="/home" exact element={<Home />}/> 
        <Route path="/notifications" exact element={<Notifications />}/>
        <Route path="/krypt/:id" exact element={<Landing />}/>
        <Route path="/setlock" exact element={<Setlock />}/>
        <Route path="/quiz" exact element={<Quiz />}/>
        <Route path="/passcode" exact element={<Passcode />}/>
        <Route path="/unlocked" exact element={<Unlocked />}/>
        <Route path="/create" exact element={<Createkrypt />}/>
        <Route path="/choice" exact element={<Multichoice />} />
        <Route path="/success" exact element={<Success />} />
        <Route path="/settings" exact element={<Settings />} />
        <Route path="/answerpass" exact element={<Answerpass />} />
        <Route path="/answerquiz" exact element={<AnswerQuiz />} />
        <Route path="/answermulti" exact element={<Answermulti />}/>
       </Routes>
    </Router>


    </div>

  

     

      

  );
}

export default App;
