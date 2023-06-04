
import { useMediaQuery, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Home(){
const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <Grid container spacing={1} sx={{mt:1, pb:2, backgroundColor:"#cae0eb"}}>
      <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Rainy weather</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              src="https://thumbs.dreamstime.com/b/sunny-day-spring-yellow-flowers-blue-sky-white-cloud-48588212.jpg"
              alt=""
              className={isMobile ? 'mobile-image' : ''}
              style={isMobile ? { maxWidth: "100%", width:"100%" } : {width:"100%"}}
            />
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Sunny weather</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              src="https://thumbs.dreamstime.com/b/sunny-day-spring-yellow-flowers-blue-sky-white-cloud-48588212.jpg"
              alt=""
              className={isMobile ? 'mobile-image' : ''}
              style={isMobile ? { maxWidth: "100%", width:"100%" } : {width:"100%"}}
            />
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} sx={{display:"flex", justifyContent:"center"}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Snowy weather</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <img
              src="https://thumbs.dreamstime.com/b/sunny-day-spring-yellow-flowers-blue-sky-white-cloud-48588212.jpg"
              alt=""
              className={isMobile ? 'mobile-image' : ''}
              style={isMobile ? { maxWidth: "100%", width:"100%" } : {width:"100%"}}
            />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>   

        
    )
}