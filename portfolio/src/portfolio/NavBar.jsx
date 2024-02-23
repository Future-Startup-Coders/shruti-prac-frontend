import {Stack , Button} from "@mui/material"

const NavBar = ()=>{
    return(
        <Stack direction='row' alignItems= "center" justifyContent="space between" sx={{height:'10vh',backgroundColor:'white',p:1}}>
            <Stack>
                <Button sx = {{fontSize:20}}> </Button>
            </Stack>
            <Stack sx={{}} direction='row'>
                <Button variant="outlined">Home</Button>
            </Stack>

        </Stack>
    )
}
export default NavBar