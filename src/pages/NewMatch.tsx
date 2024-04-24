import { Box, Button, Card, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputBase, InputLabel, MenuItem, OutlinedInput, Paper, Select, TextField, Typography, styled } from '@mui/material'

const Content = styled(Card)(({theme})=>({
  color: theme.palette.info.main,
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
  return (
    <Box sx={{padding: "20px"}}>
      <Content>
        <Typography variant='h1'>ایجاد یک مسابقه جدید</Typography>
        <Box>
          <Typography>عنوان</Typography>
          <OutlinedInput className='outlinedInput' fullWidth color='warning' />
        </Box>
        <Box>
          <Typography>سطح</Typography>
          <FormControl className='outlinedInput' fullWidth>
            <InputLabel id="demo-select-small-label"></InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={""}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <Typography>زمان</Typography>
          <OutlinedInput className='outlinedInput' fullWidth color='warning' />
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "4px"
          }}>
            <TextField
              fullWidth
              className='outlinedInput'
              id="input-with-icon-textfield"
              sx={{mr: "43px"}}
              placeholder='تا'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src='/src/assets/clock.svg' alt='clock' />
                  </InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              fullWidth
              className='outlinedInput'
              id="input-with-icon-textfield"
              placeholder='از'
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <img src='/src/assets/clock.svg' alt='clock' />
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
            <Typography>سطح</Typography>
            <FormControl className='outlinedInput' fullWidth>
              <InputLabel id="demo-select-small-label"></InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
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
            <Typography>سطح</Typography>
            <FormControl className='outlinedInput' fullWidth>
              <InputLabel id="demo-select-small-label"></InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
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
          <Checkbox sx={{p: "32px 0px 0px 0px"}} />
          <Typography>پس از ایجاد یک بازی،میتوانید به صورت دستیبازیکان اضافه کنید.</Typography>
        </Box>
        <Box>
          <Checkbox sx={{p: "12px 0px 0px 0px"}} />
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
            <Grid item><FormControlLabel control={<Checkbox />} label="خیر" /></Grid>
            <Grid item><FormControlLabel control={<Checkbox />} label="بله" /></Grid>
            <Grid item><Typography>رایگان؟</Typography></Grid>
          </Grid>
        </Box>
        <Box>
          <Typography>عنوان</Typography>
          <OutlinedInput className='outlinedInput' fullWidth color='warning' />
        </Box>
        <Box sx={{mt:"8px"}}>
          <Typography>مکان</Typography>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", boxShadow: "none", backgroundColor: '#F2F2F2'}}
          >
            <InputBase
              sx={{ ml: 1, flex: 1, fontSize: "12px", fontWeight: "400", lineHeight: "18.6px" }}
              placeholder="نام زمین خود را وارد کنید..."
              inputProps={{ 'aria-label': 'نام زمین خود را وارد کنید...' }}
            />
            <IconButton color="primary" sx={{ p: '2.5px 8.5px' }} aria-label="directions">
              <img src="/src/assets/search.svg" alt='search'/>
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
          <OutlinedInput className='outlinedInput' fullWidth color='warning' minRows={3} multiline/>
        </Box>
        <Button fullWidth color='warning' variant='contained' sx={{mt: "42px"}}>انتشار رویداد</Button>
      </Content>
    </Box>
  )
}

export default NewMatch