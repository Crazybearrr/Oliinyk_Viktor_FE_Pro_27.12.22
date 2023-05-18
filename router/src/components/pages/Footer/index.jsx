import { Box } from "@mui/material"
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

export default function Footer() {
    return(
        <Box sx={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            width:"30vh",
            margin:"0 auto"
        }}>
            <TelegramIcon/>
            <LinkedInIcon/>
            <TwitterIcon/>
            <GitHubIcon/>
            <LocalPizzaIcon/>
        </Box>    
    )
}