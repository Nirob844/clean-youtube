import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import * as React from 'react';

const PlaylistFrom = ({ open, handleClose, getPlaylistId }) => {

    const [state, setState] = React.useState('')

    const handleSubmit = () => {
        // todo handle url latter
        if (!state) {
            // { <Alert severity="error">Invalid Playlist</Alert> }
            alert('invalid')
        } else {
            getPlaylistId(state)
            setState('')
            handleClose()
        }

    }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Add Playlist</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    to add a new playlist please insert the playlist id or playlist link.
                    please make sure playlist link is correct. Otherwise we can't able to fetch the playlist information.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    label="Playlist Id or Link"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setState(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSubmit}>Add Playlist</Button>
            </DialogActions>
        </Dialog>
    );
}

export default PlaylistFrom