import React from 'react';
import logo from './logo.svg';
import './App.css';
import ColorComponent from './StyleBinding';
import { Toast } from './UsingClass';
import { Movie } from './Movies';
import { User } from './User';
import { Login, OkToast, ErrorToast} from './LoginWithStates';
import { WithHttp } from './SimpleHttp';
import {Navigate, Routes, Route, Router, BrowserRouter, NavLink,useLocation,useParams} from 'react-router-dom';

let C1 = () => {return (<h2>A sub-heading created in component C1</h2>)} //this is TS code returning html, hence it is TSX code

//Using databindings in html: {}
let user:any = {username:'admin', pwd:'nimda'}
let C2 = () => {return (<p>Username: {user.username} | Password: {user.pwd} </p>)}

let C3 = ()=> {return(<img src={logo}/>)}

let C4 = () => {return(
  <div>
    <input type= 'text' value= {user.username}/>
    <br/>
    <input type='password' value={user.pwd}/>
    <br/>
    <button>Login</button>
  </div>
)}

//Since the function returns html, hence it can be accessed as<App/> inside index.tsx
function App(){
  return(
    <div>
      <BrowserRouter>
      <div>
        <NavLink to='/login'>Login</NavLink>
        <span> | </span>
        <NavLink to='/movie'>Movie</NavLink>
        <span> | </span>
          <NavLink to='/http'>Web Api Communication</NavLink>
          <span> | </span>
      </div>

       {/*To add config use the <Route></Route>*/}
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/movie' element={<><Movie movieName='Batman Begins' rating='8' dp='logo192.png'/>
    <Movie movieName='The Dark Knight' rating='9.5' dp='logo192.png'/>
    <Movie movieName='Dark Knight Rises' rating='9.2' dp='logo192.png'/></>}
    />
    <Route path='/http' element={<WithHttp/>}/>
    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

//only one default export per file
export default App