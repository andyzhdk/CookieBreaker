import React from 'react';
import '../css/main.scss';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';

// Firebase files
import { collection, addDoc } from "firebase/firestore";
import { db } from '../firebase';

// Components
import CookieSelect from './cookieSelect';
import CookieOverview from './cookieOverview';



const style = {
    position: 'absolute',
    bottom: -20,
    width: '20em',
    left: '1em',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
  };

const button_style = {
  fontSize: '12px',
  padding: '6px'
}

const Cookie = () => {

    const [open, setOpen] = React.useState(false);
    const [initial, setInitial] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleInitial = () => setInitial(true);


    const [state, setState] = React.useState({
        accepted_cookies: true
      });
    


    const sendCookie = async (e) => {
    e.preventDefault();  
    
    try {
        const docRef = await addDoc(collection(db, "cookies"), {
            user_data: state,    
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }
  

    

    return (
        <div>
        <Button onClick={handleOpen}>Open modal</Button>
        <Button onClick={sendCookie}>send cookie</Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2" class="cookie-header">
                We value your privacy
              </Typography>

              {initial === false ? <CookieOverview></CookieOverview> : <CookieSelect></CookieSelect>}
              {initial === false ? 
                <div class="cookie-buttons">
                  <Button style={button_style} variant="outlined" onClick={handleInitial}>Manage settings</Button>
                  <Button style={button_style} variant="contained">OK</Button>
                </div>
              : 
                <div class="cookie-buttons">
                  <Button style={button_style} variant="outlined" onClick={handleInitial}>Save settings</Button>
                  <Button style={button_style} variant="contained">Accept all</Button>
                </div>
              }
             

            

            </Box>
          </Fade>
        </Modal>
      </div>
    );

};


export default Cookie;



