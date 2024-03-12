import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import { Button, Stack } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import * as React from 'react';
import { Link } from 'react-router-dom';


const PlaylistCardItem = ({ playlistThumbnail, playlistTitle, channelTitle, playlistId }) => {

    return (
        <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            margin: 1,
        }}>
            <CardMedia
                component="img"
                image={playlistThumbnail.url}
                alt={playlistTitle}
            />
            <CardContent>
                <Typography variant="h6" color="text.primary">
                    {`${playlistTitle.length > 50
                        ? playlistTitle.substr(0, 50) + ' ...'
                        : playlistTitle
                        }`}
                </Typography>
                <Typography variant="body2" color="text.primary">
                    {channelTitle}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Button to={`/player/${playlistId}`} component={Link}>
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <PlayCircleFilledOutlinedIcon />
                        <Typography variant='body2' fontWeight={600}>Start Tutorial</Typography>
                    </Stack>
                </Button>
            </CardActions>
        </Card>
    );
}

export default PlaylistCardItem