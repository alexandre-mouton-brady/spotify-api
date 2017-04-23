import Inferno, { linkEvent } from 'inferno';
import Component from 'inferno-component';

function handleKeyPressed(instance, event) {
  if (event.key === 'Enter') {
    instance.props.getAlbums(instance.state.searchTerm);
  }
}

function handleInput(instance, event) {
  instance.setState({ searchTerm: event.target.value });
  console.log(instance.state.searchTerm);
}

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  render() {
    return (
      <header className="app__header">
        <h1>Search for an artist</h1>
        <input
          onInput={ linkEvent(this, handleInput) }
          onKeyPress={ linkEvent(this, handleKeyPressed) }
        />
      </header>
    );
  }
}

export default SearchBar;
