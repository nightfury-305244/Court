import { Box, Button, TextField } from '@mui/material'

type Props = {}

const NewGame = (props: Props) => {
  return (
    <Box sx={{padding: "10px 39px"}}>
      <Box sx={{display: "flex"}}>
        <TextField 
          variant='standard' 
          value={"یافتن بازی"} 
          fullWidth sx={{marginRight: "15px"}}/>
        <TextField 
          variant='standard' 
          value={"بازی های من"}
          fullWidth />
      </Box>
      <Button 
        fullWidth 
        variant='contained' 
        color='warning'
        sx={{color: "#ffffff", marginTop: "12px"}}>
          افزودن بازی جدید 
        </Button>
    </Box>
  )
}

export default NewGame