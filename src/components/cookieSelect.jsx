import React from 'react';
import '../css/main.scss';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const style = {
    position: 'absolute',
    bottom: -20,
    width: '50vw',
    left: '10%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5
  };

const CookieSelect = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  

    const [state, setState] = React.useState({
        accepted_cookies: true
      });

  
    const label_style = {
        fontSize: '10px',
    }
    

    return (
            <div>

            <FormControl component="fieldset" variant="standard">
                <FormGroup>

                     <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <FormControlLabel
                        style={label_style}
                        control={
                            <Switch checked name="gilad" />
                        }

                        />
                        </Typography>
                        <Typography class="label-text">Essentials</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }} class="cookie-body">
                            To ensure security, prevent fraud and debug vendors can:
                            Ensure data are securely transmitted, Detect and prevent malicious, fraudulent, invalid, or illegal activity.
                            Ensure correct and efficient operation of systems and processes, including to monitor and enhance the performance of systems and processes engaged in permitted purposes
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <FormControlLabel
                        style={label_style}
                        control={
                            <Switch cname="gilad" />
                        }
                        />
                        </Typography>
                        <Typography class="label-text">Security and debugging</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }} class="cookie-body">
                            To ensure security, prevent fraud and debug vendors can:
                            Ensure data are securely transmitted, Detect and prevent malicious, fraudulent, invalid, or illegal activity.
                            Ensure correct and efficient operation of systems and processes, including to monitor and enhance the performance of systems and processes engaged in permitted purposes
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3bh-content"
                        id="panel3bh-header"
                        >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        <FormControlLabel
                        style={label_style}
                        control={
                            <Switch name="gilad" />
                        }
                        />
                        </Typography>
                        <Typography class="label-text">Analytics and marketing</Typography>
                        </AccordionSummary>

                        <AccordionDetails>
                            <Typography id="transition-modal-description" sx={{ mt: 2 }} class="cookie-body">
                            To ensure security, prevent fraud and debug vendors can:
                            Ensure data are securely transmitted, Detect and prevent malicious, fraudulent, invalid, or illegal activity.
                            Ensure correct and efficient operation of systems and processes, including to monitor and enhance the performance of systems and processes engaged in permitted purposes
                            </Typography>
                        </AccordionDetails>
                    </Accordion>















                    </FormGroup>
                </FormControl>
            </div>

    );

};


export default CookieSelect;



