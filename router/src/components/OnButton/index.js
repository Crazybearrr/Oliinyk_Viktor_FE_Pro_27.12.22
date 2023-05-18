import Button from '@mui/material/Button';

function OnButton({title, handleClick}) {
    
    return(
        <>
        <Button 
            style={{height: '20px', fontSize:'10px', margin:'10px' }}
            variant="contained"
            href="#contained-buttons"
            onClick={handleClick}>
            {title}
        </Button>
        
        </>    
    )
}

export default OnButton