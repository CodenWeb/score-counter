import { Button } from "@mui/material"
export const Reset = ({dispatch}) =>{
    return(
        <div className="fixed bottom-3 right-3" style={{fontFamily: "Nanum Gothic"}}>

            <Button onClick={() => dispatch({payLoad: "reset"})} variant="contained" size="large" color="info">Reset</Button>
        </div>
    )
}