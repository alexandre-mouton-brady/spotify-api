import Inferno from 'inferno';
import Track from './Track';

function TrackList({ tracks, playPreview }) {
  const tracklist = tracks.map(track => <Track
    key={track.id}
    track={track}
    playPreview={playPreview} />);

  return (
    <section className="app__tracklist">
      <ul>
        {tracklist}
      </ul>
    </section>
  );
}

export default TrackList;
