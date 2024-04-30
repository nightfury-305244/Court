import { Box, Button, Typography, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import plusSVG from "../../assets/+.svg"
import MyGameCard from '../../components/component/MyGameCard'
import { useAppDispatch, useAppSelector } from '../../store/hook'
import { useEffect } from 'react'
import { getMatch } from './matchSlice'

const GameTabStyle = styled(Box)(({theme})=> ({
  color: theme.palette.info.light,
  display: "flex",
  flexDirection: "row",
  h4: {
    flexGrow: 1,
    textAlign: "center",
    borderBottom: "1px solid"
  },
  ".first": {
    marginRight: "8px",
  },
  ".second": {
    color: theme.palette.primary.main,
    marginLeft: "8px"
  }
}))

type Props = {}

const MyGame = (_props: Props) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleNewGame = () => {
    navigate("/games");
  }
  
  const handleNewMatch = () => {
    navigate("/games/newmatch")
  }

  // useEffect(()=>{
  //   dispatch(getMatch("66304e1c8e3638b37fb94d9c"))
  // },[])

  const match = useAppSelector(({match})=>match)

  return (
    <Box sx={{p: "10px 39px"}}>
      <Box>
        <GameTabStyle>
          <Typography variant='h4' className='first'>یافتن بازی</Typography>
          <Typography variant='h4' className='second'>بازی های من</Typography>
        </GameTabStyle>
        <Button 
          fullWidth 
          variant='contained' 
          color='warning'
          onClick={handleNewGame}
          startIcon={<img src={plusSVG} alt='+'/>}
          sx={{marginTop: "12px"}}>
            افزودن بازی جدید 
          </Button>
      </Box>
      <MyGameCard handleNewMatch={handleNewMatch}/>
    </Box>
  )
}

export default MyGame