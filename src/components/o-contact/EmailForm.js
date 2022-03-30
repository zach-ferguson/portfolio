import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import { TextField, Box, useMediaQuery } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import CustomSnackbar from './CustomSnackbar'
import * as EmailValidator from 'email-validator';
import emailjs from '@emailjs/browser';

function EmailForm(props) {
    const mobile = !useMediaQuery('(min-width:600px)');

    const [emailValue, setEmailValue] = useState();
    const [nameValue, setNameValue] = useState();
    const [emailError, setEmailError] = useState(false);
    const [nameError, setNameError] = useState(false);
    const form = useRef();
    const [loadingSend, setLoadingSend] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openFailure, setOpenFailure] = useState(false);

    const sendEmail = () => {
        if(!EmailValidator.validate(emailValue)){
        setEmailError(true);
        }
        if(!nameValue){
        setNameError(true);
        }
        if(nameValue && EmailValidator.validate(emailValue)){
          setLoadingSend(true);
          emailjs.sendForm('service_v5q10td', 'template_3tmg1uh', form.current, 'user_biQ4OVvhWyZ1XMhhHN01m')
            .then((result) => {
            console.log(result.text);
            if(result.status === 200){
                setLoadingSend(false)
                successMessage();
            }
            }, (error) => {
            console.log(error.text);
            failMessage();
            });
        }
    };

    const successMessage = () => {
        setOpenSuccess(true)
    }

    const failMessage = () => {
        setOpenFailure(true)
    }

  return (
    <>
        <form ref={form}>
            <Box sx={{ 
                py: '20px', 
                px: {xs: '10px', md: '30px'}, 
                width: {xs: '95%', md: '420px'}, 
                height: {xs: '500px', md: '100%'}, 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                my: '3rem', 
                mx: 'auto', 
                background: '#EFF6E0', 
                border: '1px solid black', 
                borderRadius: '12px', 
                boxShadow: '8px 8px 4px 0px rgba(53,53,53,53.69)'
            }}>
                <TextField
                    error={nameError}
                    id="user_name"
                    label="Name"
                    required
                    type="text"
                    name="user_name"
                    sx={{ marginTop: '10px', width: {xs: '300px', sm: '400px'}, px: '10px' }}
                    variant='outlined'
                    value={nameValue}
                    onChange={(e) => {setNameValue(e.target.value); setNameError(false);}}
                    />
                <TextField
                    error={emailError}
                    id="user_email"
                    label="Email"
                    required
                    type="email" 
                    name="user_email"
                    sx={{ marginTop: '25px', width: {xs: '300px', sm: '400px'}, px: '10px'}}
                    variant='outlined'
                    value={emailValue}
                    onChange={(e) => {setEmailValue(e.target.value); setEmailError(false);}}
                /> 
                <TextField
                    multiline
                    rows={mobile? 8 : 10}
                    id="message-field"
                    type="text" 
                    name="message" 
                    sx={{ marginTop: '25px', width: {xs: '300px', sm: '400px'}, height: {xs: '200px', md: '300px'}, px: '10px'}}
                    placeholder='Message'
                    variant='outlined'
                    />
                <Button disableRipple={true} className='send-button' onClick={() => {sendEmail()}}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '300px',
                        height: '54px',
                        borderRadius: '25px',
                        marginTop: '35px',
                        fontSize: '24px',
                        textTransform: 'none',
                        fontWeight: 600,
                        transition: '.3s ease-in-out',
                        backgroundColor: '#fece2f',
                        color: 'black',
                        border: '1px solid black',
                        '&:hover': {
                            width: '300px',
                            backgroundColor: '#AEC3B0',
                            transition: '.1s',
                        },
                        '&:active':{
                            width: '300px',
                            backgroundColor: '#EFF6E0',
                        },
                    }}> 
                    {!loadingSend?
                        <>
                            Send
                            {/*
                            <SendIcon sx={{
                                ml: '1rem',
                            }}/>
                            */}
                        </>
                    :
                        <CircularProgress />
                    }
                </Button>
            </Box>
        </form>

        <CustomSnackbar open={openSuccess} setOpen={setOpenSuccess} message={"Sent successfully!"} modal={props.modal}/>
        <CustomSnackbar open={openFailure} setOpen={setOpenFailure} message={"Oops! Something went wrong. Please try again and if the problem persists, contact rootbeer.service@gmail.com"} modal={props.modal}/>
    </>
  )
}

export default EmailForm;
