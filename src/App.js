
import './App.css';
import Alert from './componants/Alert';
import Navbar from './componants/Navbar';
import About from './componants/about';
import TextForm from './componants/text';
import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode,setmode] = useState('light');
  const [msg,setmsg] = useState(null)
  const setAlert = (msg,type)=>{
    setmsg({
      msg: msg,
      type: type
    })
    setTimeout(()=>{
      setmsg(null);
    },1500)
  }
  const toglemode = ()=>{
    if(mode === 'dark'){
      setmode('light');
      document.body.style.backgroundColor = 'white';
      setAlert('Light mood enabled', 'success')
    }else{
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      setAlert('Dark mood enabled','success')
    }
  }
  return (
    <>
      <Router>
        <Navbar mode={mode} toglemode={toglemode}/>
        <Alert Alert={msg}/>
        <div className={`container my-3`}>
          
          {/* <About /> */}
          <Switch>
            <Route path="/About">
              <About/>  
            </Route>
            <Route path="/">
              <TextForm heading="Enter the text to analyze" mode={mode} setAlert={setAlert}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <App />
//       <MyButton />
//     </div>
//   );
// }

export default App;
