import Inferno, { linkEvent } from 'inferno';

function handleClick(obj) {
  obj.fnc(obj.album);
}

function Album(props) {
  return (
    <li>
      <figure>
        <img
          src={props.album.images[1].url}
          alt={props.album.name}
          onClick={ linkEvent({ fnc: props.getTracks, album: props.album.id }, handleClick) }
        />
      </figure>

      <figcaption>
        {props.album.name}
      </figcaption>
    </li>
  );
}

export default Album;
