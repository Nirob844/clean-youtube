import { Button, Container, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const Navbar = () => {


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color='default' sx={{ py: 2 }}>
                <Container maxWidth={'lg'}>
                    <Toolbar>
                        <Stack sx={{ flexGrow: 1 }}>
                            <Typography variant="h4">
                                Clean Youtube
                            </Typography>
                            <Typography variant="body1" >
                                Stack Learner
                            </Typography>
                        </Stack>
                        <Button variant='contained'>
                            Add Playlist
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Navbar