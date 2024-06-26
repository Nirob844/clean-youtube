import { Container, Grid } from '@mui/material';
import React from 'react';
import PlaylistCardItem from '../../components/playlist-card-item';
import usePlaylists from '../../hooks/usePlaylists';

const HomePage = () => {
    const { playlists } = usePlaylists()

    const playlistArray = Object.values(playlists)

    return (
        <>
            <Container maxWidth={'lg'} sx={{ my: 16 }}>
                {playlistArray.length > 0 && (
                    <Grid container alignItems="stretch">
                        {playlistArray.map((item) => (
                            <Grid item xs={12} md={6} lg={4} mb={2}>
                                <PlaylistCardItem
                                    key={item.playlistID}
                                    playlistId={item.playlistID}
                                    playlistThumbnail={item.playlistThumbnail}
                                    playlistTitle={item.playlistTitle}
                                    channelTitle={item.channelTitle}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </>
    );
};

export default HomePage;