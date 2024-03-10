import { useEffect } from "react";
import usePlaylists from "./hooks/usePlaylists";



const App = () => {

  const { getPlaylistById, playlists } = usePlaylists()

  useEffect(() => {
    getPlaylistById('PL_XxuZqN0xVDr08QgQHljCecWtA4jBLnS')
  }, []);

  console.log(playlists);
  return (
    <div>
      <h1>Clean Youtube</h1>
    </div>
  );
};

export default App;