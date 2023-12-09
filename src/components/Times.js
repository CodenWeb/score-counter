import {Button} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { grey } from '@mui/material/colors';

export const Times = ({state, dispatch}) => {
const handleOneMinus = (event) => {
    state.player1 >= 1 ? dispatch({payLoad: "handleOneMinus"}) : console.log();
    event.stopPropagation();
}
const handleTwoMinus = (e) => {
    state.player2 >= 1 ? dispatch({payLoad: "handleTwoMinus"}) : console.log();
    e.stopPropagation();
}

    return(
        <div className="w-full h-screen bg-bg-200 text-white grid grid-col-1 gap-1" style={{fontFamily: "Nanum Gothic"}}>
            <div onClick={() => dispatch({payLoad: "handleOne"})} className='p-1 h-full text-3xl flex justify-center items-center'>
                <div className='grid grid-col-1 gap-1'>
                <p className='text-center'>Player 1</p>
                <div className=''><p className='text-center text-9xl p-2'>{state.player1}</p></div>
                <div className='flex justify-around'><Button variant="text"><AddCircleIcon sx={{ fontSize: 40, color: grey[50] }} ></AddCircleIcon></Button><Button onClick={event => handleOneMinus(event)} variant="text"><RemoveCircleIcon sx={{ fontSize: 40, color: grey[50] }} ></RemoveCircleIcon></Button></div>
                </div>
            </div>
            <div onClick={() => dispatch({payLoad: "handleTwo"})} className='p-1 h-full bg-bg-900 text-3xl flex justify-center items-center'>
                <div className='grid grid-col-1 gap-1'>
                <p className='text-center'>Player 2</p>
                <div className=''><p className='text-center text-9xl p-2'>{state.player2}</p></div>
                <div className='flex justify-around'><Button variant="text"><AddCircleIcon sx={{ fontSize: 40, color: grey[50] }} ></AddCircleIcon></Button><Button onClick={e => handleTwoMinus(e)} variant="text"><RemoveCircleIcon sx={{ fontSize: 40, color: grey[50] }} ></RemoveCircleIcon></Button></div>
                </div>
            </div>
        </div>
    )
}