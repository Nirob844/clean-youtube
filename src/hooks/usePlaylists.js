import { useState } from "react";
import getPlaylist from "../api";

const usePlaylists = () => {
  const [state, setState] = useState({
    playlists: {},
    recentPlaylists: [],
    favorites: [],
  });

  const getPlaylistById = async (playlistID, force = false) => {
    if (state.playlists[playlistID] && !force) {
      return;
    }

    let result = await getPlaylist(playlistID);

    let cid, ct;

    result = result.map((item) => {
      const {
        channelId,
        title,
        description,
        thumbnails: { medium },
        channelTitle,
      } = item.snippet;

      if (!cid) {
        cid = channelId;
      }

      if (!ct) {
        ct = channelTitle;
      }

      return {
        title,
        description,
        thumbnail: medium,
        contentDetails: item.contentDetails,
      };
    });
    setState((prev) => ({
      ...prev,
      playlists: {
        ...prev.playlists,
        [playlistID]: {
          items: result,
          playlistId: playlistID,
          channelId: cid,
          channelTitle: ct,
        },
      },
    }));
  };

  const addToFavorites = (playlistID) => {
    setState((prev) => ({
      ...prev,
      favorites: [...prev, playlistID],
    }));
  };

  const addToRecent = (playlistID) => {
    setState((prev) => ({
      ...prev,
      recentPlaylists: [...prev, playlistID],
    }));
  };

  const getPlaylistsByIds = (ids = []) => {
    return ids.map((id) => state.playlists[id]);
  };

  return {
    playlists: state.playlists,
    favorites: getPlaylistsByIds(state.favorites),
    recentPlaylists: getPlaylistsByIds(state.recentPlaylists),
    getPlaylistById,
    addToRecent,
    addToFavorites,
  };
};

export default usePlaylists;
