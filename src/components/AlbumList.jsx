import Inferno from 'inferno';
import Album from './Album';

function AlbumList({ albums, getTracks }) {
  const albumslist = albums.map(album => <Album
    key={album.id}
    album={album}
    getTracks={getTracks}
  />);

  return (
    <aside className="app__sidebar">
      <ul>
        { albumslist }
      </ul>
    </aside>
  );
}

export default AlbumList;
