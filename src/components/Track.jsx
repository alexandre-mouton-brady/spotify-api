import Inferno, { linkEvent } from 'inferno';

function handleClick(obj) {
  obj.playPreview(obj.track.preview_url);
}

function Track({ track, playPreview }) {
  return (
    <li onDblClick={ linkEvent({ playPreview, track }, handleClick) }> {track.name} </li>
  );
}

export default Track;
