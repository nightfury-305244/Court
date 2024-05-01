import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputBase, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography, styled } from '@mui/material'
import clock from "../../assets/clock.svg"
import search from "../../assets/search.svg"

const Content = styled(Card)(({theme})=>({
  "*": {color: theme.palette.info.main},
  padding: "20px 12.7px",
  ".outlinedInput": {
    "input": {
      padding: "6px 10px",
    },
    "fieldset": {
      borderColor: "#FEBE40"
    },
    ".MuiSelect-outlined": {
      padding: "6px 32px 6px 10px",
    }
  }
}))

type Props = {}

const NewMatch = (_props: Props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    const formData = new FormData(event.currentTarget);
    const data = {
      subject: formData.get("title"),
      ntrp: 3,
      duration: 2,
      type: 4,
      date: formData.get("time"),
      cost: formData.get("price"),
      city: "shahi",
      place: formData.get("place"),
      description: formData.get("description")
    }
    console.log("data", data);
  }
  return (
    <Box sx={{padding: "20px"}}>
      <Content>
        <Box component={"form"} onSubmit={handleSubmit}>
          <Typography variant='h1'>ایجاد یک مسابقه جدید</Typography>
          <Box>
            <Typography>عنوان</Typography>
            <OutlinedInput name="title" className='outlinedInput' fullWidth color='warning' />
          </Box>
          <Box>
            <Typography>سطح</Typography>
            <FormControl fullWidth className='outlinedInput'>
              <InputLabel id="level-label"></InputLabel>
              <Select
                labelId="level-label"
                name="level"
                value={""}
              >
                <MenuItem value="">
                  <em>Junior</em>
                </MenuItem>
                <MenuItem value={10}>Beginer</MenuItem>
                <MenuItem value={20}>Professional</MenuItem>
                <MenuItem value={30}>Expert</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Typography>زمان</Typography>
            <OutlinedInput id="time" className='outlinedInput' fullWidth color='warning' />
            <Box sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "4px"
            }}>
              <TextField
                fullWidth
                className='outlinedInput'
                name="startTime"
                sx={{mr: "43px"}}
                placeholder='تا'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={clock} alt='clock' />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
              <TextField
                fullWidth
                className='outlinedInput'
                name="endTime"
                placeholder='از'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={clock} alt='clock' />
                    </InputAdornment>
                  ),
                }}
                variant="outlined"
              />
            </Box>
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "4px"
          }}>
            <Box sx={{width: "100%", mr:"43px"}}>
              <Typography>حداکثر بازیکن</Typography>
              <FormControl fullWidth className='outlinedInput'>
                <InputLabel id="maxplayer-label"></InputLabel>
                <Select
                  labelId="maxplayer-label"
                  name="maxplayer"
                  value={2}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{width: "100%"}}>
              <Typography>حداقل بازیکن</Typography>
              <FormControl fullWidth className='outlinedInput'>
                <InputLabel id="minplayer-label"></InputLabel>
                <Select
                  labelId="minplayer-label"
                  name="minplayer"
                  value={2}
                >
                  <MenuItem value={1}>1</MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box>
            <Checkbox name="allow" sx={{p: "32px 0px 0px 0px"}} />
            <Typography>پس از ایجاد یک بازی،میتوانید به صورت دستیبازیکان اضافه کنید.</Typography>
          </Box>
          <Box>
            <Checkbox name="permission" sx={{p: "12px 0px 0px 0px"}} />
            <Typography>پس از ایجاد یک بازی،میتوانید به صورت دستیبازیکان اضافه کنید.</Typography>
          </Box>
          <Box>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={4}
            >
              <Grid item><FormControlLabel control={<Checkbox name='free' />} label="خیر" /></Grid>
              <Grid item><FormControlLabel control={<Checkbox name="unfree" />} label="بله" /></Grid>
              <Grid item><Typography>رایگان؟</Typography></Grid>
            </Grid>
          </Box>
          <Box>
            <Typography>قیمت</Typography>
            <OutlinedInput name="price" className='outlinedInput' fullWidth color='warning' />
          </Box>
          <Box sx={{mt:"8px"}}>
            <Typography>مکان</Typography>
            <Paper
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", boxShadow: "none", backgroundColor: '#F2F2F2'}}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, fontSize: "12px", fontWeight: "400", lineHeight: "18.6px" }}
                name='place'
                placeholder="نام زمین خود را وارد کنید..."
                inputProps={{ 'aria-label': 'نام زمین خود را وارد کنید...' }}
              />
              <IconButton color="primary" sx={{ p: '2.5px 8.5px' }} aria-label="directions">
                <img src={search} alt='search'/>
              </IconButton>
            </Paper>
          </Box>
          <Box sx={{mt:"12px"}}>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={4}
            >
              <Grid item><FormControlLabel control={<Checkbox />} label="خیر" /></Grid>
              <Grid item><FormControlLabel control={<Checkbox />} label="بله" /></Grid>
              <Grid item><Typography>رزرو انجام شده</Typography></Grid>
            </Grid>
          </Box>
          <Box>
            <Typography>توضیحات بیشتر</Typography>
            <OutlinedInput name="description" className='outlinedInput' fullWidth color='warning' minRows={3} multiline/>
          </Box>
          <Button fullWidth color='warning' variant='contained' sx={{mt: "42px"}} type='submit'>انتشار رویداد</Button>
        </Box>
      </Content>
    </Box>
  )
}

export default NewMatch