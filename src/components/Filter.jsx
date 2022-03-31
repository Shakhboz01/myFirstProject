import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { GrSort } from 'react-icons/gr';
import { Tooltip } from '@mui/material';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

 function DialogSelect() {
  const [open, setOpen] = React.useState(false);
  const [price, setPrice] = React.useState('');
  const [sort,setSort]=React.useState("")
  const handleChangePrice = (event) => {
    setPrice( event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const top100Films=[
    { title: "qolib" },
    { title: 'Plitka' },
    { title: 'The : Part II',  },
    { title: 'The Dark Knight', },
    { title: '12  Men', },
    { title: "'s List", }
  ]
  return (
    <div>
          <Tooltip title="filter" >
      <Button onClick={handleClickOpen} style={{width:"60px",height:"60px",background:"#34d24e",borderRadius:'50%'}} ><GrSort/></Button>
          </Tooltip>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Fill the form</DialogTitle>
        <DialogContent style={{width:'400px'}} >
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Price</InputLabel>
              <Select
                native
                value={price}
                onChange={handleChangePrice}
                input={<OutlinedInput label="Price" id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option value='Desc'>Desc</option>
                <option value='Incr'>Incr</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Sort</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={sort}
                onChange={(e)=>setSort(e.target.value)}
                input={<OutlinedInput label="Sort" />}
              >
                
                <MenuItem value='Newest'>Newest</MenuItem>
                <MenuItem value='Oldest'>Oldest</MenuItem>
              </Select>
            </FormControl>

            <Autocomplete
        multiple
        style={{width:"100%"}}
        id="tags-standard"
        options={top100Films}
        getOptionLabel={(option) => option.title}
        defaultValue={[top100Films[3]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />

          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}





const Filter = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div style={{display:"flex",alignItems:"center",width:"95%",margin:"50px auto 0 "}} >

      <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"><SearchIcon/></InputAdornment>}
            label="Amount"
          />
        </FormControl>
        <DialogSelect/>
      
      </div>
  )
}

export default Filter
