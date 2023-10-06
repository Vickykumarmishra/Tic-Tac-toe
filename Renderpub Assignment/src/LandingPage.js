import React from 'react'
import { BrowserRouter, NavLink,Link} from 'react-router-dom'
import Typewriter from 'typewriter-effect';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
export default function LandingPage() {
 
  const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    const {isAuthenticated}=useAuth0();
    const {user}=useAuth0();
    const navigate=useNavigate();

  return (
    
    <div >
      <div className="container text-center"   style={{color:'white',fontSize:'2rem',fontFamily:'tahoma'}}  >

<div className='row'>
  <div className='col'>


<b><Typewriter
      options={{
        strings: ['Tic-Tac-Toe', 'Lets Play and enjoy'],
        autoStart: true,
        loop: true,
      }}
     
    /></b></div>
    </div>

    <div className='container'>
    <center>{isAuthenticated?<li><button whileHover={{scale:1.1}} style={{marginRight:"1rem",height:'2.5rem',marginTop:'2rem',marginBottom:'1rem'}} className="btn btn-light" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } }) }><center><b> Log Out</b></center></button></li>: <><button whileHover={{scale:1.1}} className="btn btn-light" style={{marginRight:"1rem",height:'2.5rem',marginTop:'5rem',marginBottom:'2rem'}} onClick={() =>loginWithRedirect() }><center><b>Log In</b></center></button></>}</center>
    </div>
  
  
</div>
      
</div>
  )
}
