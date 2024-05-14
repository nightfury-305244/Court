import { Box, Button, Tab, styled } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import React, { useEffect } from 'react'
import MyGameCard from '../../components/component/MyGameCard';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { MatchState, getMatchByUserID } from './matchSlice';

const Container = styled(Box)(({theme})=>({
  padding: "0 20px",
  ".MuiTabs-root":{
    minHeight: "10px"
  },
  ".MuiTabs-flexContainer": {
    display: "flex",
    ".MuiTab-textColorPrimary": {
      borderBottom: "1px solid", 
      borderColor: theme.palette.info.light,
      flexBasis: 0,
      flexGrow: 1,
      margin: "0 10px",
      padding: "6px 16px",
      minHeight: "auto"
    }
  },
  ".MuiTabPanel-root": {
    padding: "0 10px"
  }
}))

type Props = {}

const Games = (_props: Props) => {
  const [value, setValue] = React.useState('1');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleNewMatch = () => {
    navigate("/games/newmatch")
  }

  useEffect(()=>{
    dispatch(getMatchByUserID())
  },[])

  const matches:MatchState[] = useAppSelector(({match})=>match)

  return (
    <Container>
      <TabContext value={value}>
        <Box>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="یافتن بازی" value="1" />
            <Tab label="بازی های من" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <Button 
            fullWidth 
            variant='contained' 
            color='warning'
            startIcon={<img src="/images/+.svg" alt='+'/>}
            sx={{marginTop: "12px"}}>
              افزودن بازی جدید 
          </Button>
        </TabPanel>
        <TabPanel value="2">
          <Button 
            fullWidth 
            variant='contained' 
            color='warning'
            onClick={handleNewMatch}
            startIcon={<img src="/images/+.svg" alt='+'/>}
            sx={{marginTop: "12px"}}>
              افزودن بازی جدید 
          </Button>
          {matches && matches.map((match, index)=>(
            <MyGameCard key={index} match={match} />
          ))}
        </TabPanel>
      </TabContext>
    </Container>
  );
}

export default Games