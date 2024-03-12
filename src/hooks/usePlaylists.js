import { useEffect, useState } from "react";
import getPlaylist from "../api";
import storage from "../utils/Storage";

const INIT_STATE = {
  playlists: {},
  recentPlaylists: [],
  favorites: [],
};
const STORAGE_KEY = "cy_playlist_state";

const usePlaylists = () => {
  const [state, setState] = useState(INIT_STATE);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const state = storage.get(STORAGE_KEY);
    if (state) {
      setState({ ...state });
    }
  }, []);

  useEffect(() => {
    if (state !== INIT_STATE) {
      storage.save(STORAGE_KEY, state);
    }
  }, [state]);

  const getPlaylistById = async (playlistID, force = false) => {
    if (state.playlists[playlistID] && !force) {
      return;
    }

    setLoading(true);
    try {
      const playlist = await getPlaylist(playlistID);

      setError("");
      setState((prev) => ({
        ...prev,
        playlists: {
          ...prev.playlists,
          [playlistID]: playlist,
        },
      }));
    } catch (e) {
      setError(e?.response?.data?.error?.message || "something went wrong");
    } finally {
      setLoading(false);
    }
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
    error,
    loading,
    getPlaylistById,
    addToRecent,
    addToFavorites,
  };
};

export default usePlaylists;
