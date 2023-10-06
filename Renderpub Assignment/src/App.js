
import Home from "./Home";
import Participants from "./Participants";
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import "./design/app.css";

import { useState } from 'react';

function App() {

	const [reset, setReset] = useState(false);


	const [champion, setChampion] = useState('');


	const resetMatch = () => {
		setReset(true);
	}

	return (
		<div className="App ">
			<BrowserRouter>
      <Navbar/>
	 
			<center><div className={`container ${champion !== '' ? '' : 'shrink'} `} style={{backgroundColor:'lightgreen',borderRadius:'1rem ',marginTop:"4rem",width:"12rem"}}>
			
				<div className='champion-text'>{champion}</div>
			
				<button className="btn btn-success" onClick={() => resetMatch()} style={{borderRadius:'1rem',borderBottom:'0.2rem solid red',marginBottom:'0.5rem'}}>
					Reset Match
				</button>
			</div></center>
	
  <Routes>
   <Route path='/' element={<LandingPage/>}></Route>
  <Route path="/Participants" element={<Participants/>}></Route>
  
  <Route path="/Home" element={<Home reset={reset} setReset={setReset} champion={champion} setChampion={setChampion} />}></Route></Routes>

			
		</BrowserRouter>
    
		</div>
	);
}

export default App;
