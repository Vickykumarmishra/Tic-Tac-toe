import "./design/Home.css";
import useSound from 'use-sound';
import { useState, useEffect, useRef } from "react";
import Participants from "./Participants";
import Swal from 'sweetalert2';

const Home = ({ reset, setReset, champion, setChampion }) => {
     const [usee,setUsee]=useState(0);
    const [alertsound]=useSound('alert.mp3')
    const [play3] =useSound('click sound.mp3')
	
	const [info, setInfo] = useState(['', '', '', '', '','', '', '', ''])

	const [turn, setTurn] = useState(0);
    
	const homeRef = useRef(null);

	const create = (event, index) => {

           play3();
		if (info[index - 1] === '' && champion === '') {

			
			const current = turn === 0 ? "X" : "O"

			info[index - 1] = current;

			
			event.target.innerText = current;

			setTurn(turn === 0 ? 1 : 0)
		}
	}

    function success(){
        Swal.fire(
            'You Logged In Successfully!',
            'Enjoy your game 😊',
            'success'
          )
    }
    useEffect(()=>{
     success();

    },[usee])
    

	useEffect(() => {

		
		setInfo(['', '', '', '', '', '', '', '', '']);

	
		const cells = homeRef.current.children

		for (let i = 0; i < 9; i++) {
			cells[i].innerText = '';
		}


		setTurn(0);

		setChampion('');
		setReset(false);
	}, [reset, setReset, setChampion])


	
	useEffect(() => {

	
		const investigateRow = () => {
			let ans = false;
			for (let i = 0; i < 9; i += 3) {
				ans |= (info[i] === info[i + 1] &&
					info[i] === info[i + 2] &&
					info[i] !== '')
			}
			return ans;
		}

		const investigateDiagonal = () => {
			return ((info[0] === info[4] &&
				info[0] === info[8] && info[0] !== '') ||
				(info[2] === info[4] && info[2] === info[6] &&
					info[2] !== ''));
		}

		const investigateCol = () => {
			let ans = false;
			for (let i = 0; i < 3; i++) {
				ans |= (info[i] === info[i + 3] &&
					info[i] === info[i + 6] &&
					info[i] !== '')
			}
			return ans;
		}

		

		const investigateWin = () => {
			return (investigateRow() || investigateCol() || investigateDiagonal());
		}

		const investigateTie = () => {
			let count = 0;
			info.forEach((cell) => {
				if (cell !== '') {
					count++;
				}
			})
			return count === 9;
		}

		if (investigateWin()) {
            alertsound();
			setChampion(turn === 0 ? "Gamer 2 Wins!" :
			"Gamer 1 Wins!");
		} else if (investigateTie()) {
            alertsound();
			
			setChampion("Game Tie!");
		}

	})

	return (
<>
        <Participants />
		<div ref={homeRef} className="container" style={{width: '50vw',
	height: '100%',
	backgroundColor: 'var(--board-background)',
	display: 'flex',
	alignItems: 'flex-start',
	flexDirection:'row',
	justifyContent:'center',
	flexWrap: 'wrap',
border:"0.1rem solid white",marginBottom:"1rem",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white'}}
   >
			<div className="field field-1"
				onClick={(e) => create(e, 1)}>

				</div>
			<div className="field field-2"
				onClick={(e) => create(e, 2)}>

				</div>
			<div className="field field-3"
				onClick={(e) => create(e, 3)}>

				</div>
			<div className="field field-4"
				onClick={(e) => create(e, 4)}>

				</div>
			<div className="field field-5"
				onClick={(e) => create(e, 5)}>

				</div>
			<div className="field field-6"
				onClick={(e) => create(e, 6)}>

				</div>
			<div className="field field-7"
				onClick={(e) => create(e, 7)}>

				</div>
			<div className="field field-8"
				onClick={(e) => create(e, 8)}>

				</div>
			<div className="field field-9"
				onClick={(e) => create(e, 9)}>

				</div>
		</div>
		</>
	)
}

export default Home;
