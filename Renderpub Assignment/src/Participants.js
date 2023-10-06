

const Participants= () => {
	return (
		<center><div >
			<button  id="participants" className="btn btn-success" style={{marginLeft:"0.5rem",marginBottom:"0.5rem",borderRadius:'1rem',borderBottom:'0.2rem solid red',marginRight:'2rem'}}>Gamer 1: X</button>
			<button id="participants" className="btn btn-success" style={{marginLeft:"0.5rem",marginBottom:"0.5rem",borderRadius:'1rem',borderBottom:'0.2rem solid red',marginRight:'2rem'}}>Gamer 2: O</button>
			<u style={{backgroundColor:'red'}}></u>
		</div></center>
	)
}

export default Participants;
