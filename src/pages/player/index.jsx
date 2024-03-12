import { Container, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import usePlaylists from '../../hooks/usePlaylists';

const PlayerPage = () => {

    const { playlists } = usePlaylists()
    const { playlistId } = useParams()

    const current = playlists[playlistId];
    if (!current) return

    return (
        <Container maxWidth={'lg'} sx={{ my: 16 }}>
            <Typography variant="h2" align="center">
                {current.playlistTitle}
            </Typography>
            <Typography variant="body1">{current.playlistDescription}</Typography>
        </Container>
    );
};

export default PlayerPage;