import React, { useState } from 'react'
import { AppBar, Modal, Tab, Tabs, Box } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { useTheme } from '../Context/ThemeContext'
import GoogleButton from 'react-google-button'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { toast } from 'react-toastify';
import errorMapping from '../Utilities/errorMapping';
import { auth } from '../firebaseConfig';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const AccountCircle = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(0)
    const { theme } = useTheme()

    //check user logged in 
    // const user = auth.currentUser;

    //if user changed holds that user(current user)
    const [user] = useAuthState(auth);
    const navigate = useNavigate()


    const handleModalOpen = () => {
        if (user) { //user logged in profile page open 
            navigate('/user')
        } else {
            setOpen(true);
        }
    }
    const handleModalClose = () => {
        setOpen(false)
    }
    const handleValueChange = (e, v) => {
        setValue(v);

    }

    const logout = () => {
        auth.signOut().then((res) => {
            toast.success('Logged out')
        }).catch((err) => {
            toast.error('Not able to logged out.')
        })
    }

    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignin = () => {
        //validate user
        signInWithPopup(auth, googleProvider).then((res) => {
            toast.success('Signin from google...')
        }).catch((err) => {
            toast.error(errorMapping[err.code] || 'Not able to use google account.')
        })
    }



    return (
        <div>
            <AccountCircleIcon onClick={handleModalOpen} />
            {user && <LogoutIcon onClick={logout} />}

            <Modal
                open={open}
                onClose={handleModalClose}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <div style={{ width: '480px', textAlign: 'center' }}>
                    {/* //Appbar gives rectangle look */}
                    <AppBar position='static' style={{ background: 'transparent' }}>
                        <Tabs
                            variant='fullWidth'
                            value={value}
                            onChange={handleValueChange}
                        >
                            <Tab label='login' style={{ color: theme.textColor }}></Tab>
                            <Tab label='signup' style={{ color: theme.textColor }}></Tab>
                        </Tabs>
                        {value === 0 && <LoginForm handleModalClose={handleModalClose} />}
                        {value === 1 && <SignupForm handleModalClose={handleModalClose} />}
                        <Box >
                            <span>OR</span>
                            <GoogleButton
                                style={{ width: '100%', marginTop: '10px' }}
                                onClick={handleGoogleSignin}
                            />
                        </Box>
                    </AppBar>

                </div>

            </Modal>
        </div>

    )
}

export default AccountCircle;