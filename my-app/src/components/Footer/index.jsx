import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Box, Grid, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "rgba(25, 118, 210, 0.2)" }}>
      <Box >
        <Grid 
            container spacing={1} 
            sx={{ 
                display: "flex", 
                justifyContent: "center", 
                pt: 2 }}>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ padding: "10px" }}>
              <Box component="span">WE ARE IN</Box>
              <Box>
                <Link href="#">
                    <TwitterIcon /> 
                </Link>
                <Link href="#">
                    <WhatsAppIcon />
                </Link>
                <Link href="#">
                    <LinkedInIcon />
                </Link>
                <Link href="#">
                    <FacebookIcon />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box sx={{ 
                display: "flex", 
                flexDirection: "column", 
                padding: "10px" }}>
              <Box component="span">SUBSCRIPTION SERVICES</Box>
              <Link href="#">For Business</Link>
              <Link href="#">For Partners</Link>
              <Link href="#">For Advertising</Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Box sx={{ 
                display: "flex", 
                flexDirection: "column", 
                padding: "10px" }}>
              <Box component="span">APPS & DOWNLOADS</Box>
              <Link href="#">Ios App</Link>
              <Link href="#">Android App</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Footer;
