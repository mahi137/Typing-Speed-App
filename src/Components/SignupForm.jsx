import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useTheme } from '../Context/ThemeContext'
import {auth} from '../firebaseConfig'
import { toast } from 'react-toastify';
import errorMapping from '../Utilities/errorMapping';

 
const SignupForm = () => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const {theme} = useTheme()

    const handleSubmit = ({handleModalClose})=>{
      if(!email || !password || !confirmPassword){
        toast.warning("Please enter all details...")
        return;
      }
      if(password !== confirmPassword){
           toast.error("Passwords mismatch. ")
        return;
      }
      
      auth.createUserWithEmailAndPassword(email,password).then((res)=>{
        toast.success("User created successfully...")
        handleModalClose()
      }).catch((err)=>{
        toast.error(errorMapping[err] || 'Some error occured')
        toast.error(err)
      })
    }
  return (
    <Box
    p={3}
    style = {{
        display : 'flex',
        flexDirection : 'column',
        gap : '20px',

    }}
    >
        <TextField 
        variant='outlined'
        type='email'
        label = 'Enter Email'
        onChange={(e)=>setEmail(e.target.value)}
        InputLabelProps={{ //change color of label
          style : {
            color : theme.textColor
          }
        }}
        inputProps={{ //change color of input
          style : {
            color : theme.textColor
          }
        }}
        />
        <TextField
        variant='outlined'
        type='password'
        label = 'Enter Password'
        onChange={(e)=>setPassword(e.target.value)}
        InputLabelProps={{ //change color of label
          style : {
            color : theme.textColor
          }
        }}
        inputProps={{ //change color of input
          style : {
            color : theme.textColor
          }
        }}
        />
        <TextField
        variant='outlined'
        type='password'
        label = 'Enter Confirm Password'
        onChange={(e)=>setConfirmPassword(e.target.value)}
        InputLabelProps={{ //change color of label
          style : {
            color : theme.textColor
          }
        }}
        inputProps={{ //change color of input
          style : {
            color : theme.textColor
          }
        }}
        />

        <Button
        variant='contained' 
        size = 'large'
        style ={{
          background:theme.textColor,
          color : theme.background
        }}
        onClick = {handleSubmit}
        >
        Sign up</Button>
    </Box>
  )
}

export default SignupForm;