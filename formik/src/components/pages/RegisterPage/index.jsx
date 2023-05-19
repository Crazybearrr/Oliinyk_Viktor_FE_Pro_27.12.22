import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Box, TextField, Typography, Button} from '@mui/material';

const validationSchema = Yup.object({
    name: Yup
        .string('Enter your name')
        .max(15, 'Must be 15 characters or less')
        .min(2, 'Min must be 2 characters')
        .required('Enter your name'),
    email: Yup
        .string('Enter your email')
        .email('Invalid email address')
        .required('Enter your email'),

    phone: Yup
        .string('Enter your phone number')
        .required('Enter your phone number')
        .matches(
            /^(?:\+38)?(?:039|050|063|066|067|068|091|092|093|094|095|096|097|098|099)\d{7}$/,
            'The phone number was entered incorrectly'),

    password: Yup 
        .string('Enter your password')
        .max(17,'Must be 17 characters or less')
        .min(8, 'Min must be 8 characters')
        .required('Enter your password')
});

export default function ReqisterPage() {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            password: '',
        },
        validationSchema:validationSchema,

        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return(
        <Box 
            component={"form"} 
            onSubmit={formik.handleSubmit} 
            sx={{
                display:"flex", 
                alignItems:"center", 
                flexDirection:"column"
            }}>

            <Typography 
                component={"h1"} 
                sx={{
                    margin:"30px", 
                    fontSize:"2rem", 
                    color:"primary"
                }}>
                Reqister and start working
            </Typography>

            <TextField
                sx={{ margin:"10px"}}
                label="Name"
                color="success"
                variant="filled"
                focused
                id='name'
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={!!formik.errors.name}
                helperText={formik.errors.name}
                inputProps={{
                    style: { color: "white" }
                  }}
            />
             <TextField
                sx={{ margin:"10px"}}
                label="Email"
                color="success"
                variant="filled"
                focused
                id='email'
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={!!formik.errors.email}
                helperText={formik.errors.email}
                inputProps={{
                    style: { color: "white" }
                  }}
            />
             <TextField
                sx={{ margin:"10px"}}
                label="Phone number"
                color="success"
                variant="filled"
                focused
                id='phone'
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={!!formik.errors.phone}
                helperText={formik.errors.phone}
                inputProps={{
                    style: { color: "white" }
                  }}
            />
              <TextField
                sx={{ margin:"10px"}}
                label="Password"
                color="success"
                variant="filled"
                focused
                id='password'
                name='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={!!formik.errors.password}
                helperText={formik.errors.password}
                inputProps={{
                    style: { color: "white" }
                  }}
            />
            <Button 
                color="success"
                variant="contained" 
                type="submit"
                >
                Submit
            </Button>           
        </Box>
        )
}