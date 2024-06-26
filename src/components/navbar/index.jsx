import { Button, Container, Link, Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import usePlaylists from '../../hooks/usePlaylists';
import PlaylistFrom from '../playlist-form';

const Navbar = () => {

    const { getPlaylistById } = usePlaylists()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const getPlaylistId = (playlistId) => {
        getPlaylistById(playlistId)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color='default' sx={{ py: 2 }}>
                <Container maxWidth={'lg'}>
                    <Toolbar>
                        <Stack sx={{ flexGrow: 1 }}>
                            <Link component={RouterLink} to='/' sx={{ textDecoration: 'none', color: "black" }}>
                                <Typography variant="h4">
                                    Clean Youtube
                                </Typography>
                            </Link>
                        </Stack>
                        <Button variant='contained' onClick={handleClickOpen}>
                            Add Playlist
                        </Button>
                        <PlaylistFrom open={open} handleClose={handleClose} getPlaylistId={getPlaylistId} />
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Navbar