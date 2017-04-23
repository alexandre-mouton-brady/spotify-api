import Inferno from 'inferno';
import Components from 'inferno-component';
import SearchBar from './components/SearchBar';
import AlbumList from './components/AlbumList';
import TrackList from './components/TrackList';
import './styles/index.css';
import * as musicAPI from './api/musicApi';


class App extends Components {
  constructor() {
    super();

    this.state = {
      albums: [],
      tracks: [],
    };

    this.currentPreview = null;
    this.getAlbums = this.getAlbums.bind(this);
    this.processAlbums = this.processAlbums.bind(this);
    this.getTracks = this.getTracks.bind(this);
    this.processTracks = this.processTracks.bind(this);
    this.playPreview = this.playPreview.bind(this);
  }

  // Getters
  getAlbums(artist) {
    musicAPI.getAlbums(artist, this.processAlbums);
  }

  getTracks(albumId) {
    musicAPI.getTracks(albumId, this.processTracks);
  }

  // Setters
  processAlbums(payload) {
    this.setState({
      albums: payload.albums.items,
      tracks: [],
    });
  }

  processTracks(payload) {
    this.setState({
      tracks: payload.tracks.items,
    });
  }

  playPreview(previewUrl) {
    if (this.currentPreview) {
      const curAudioObject = this.currentPreview;
      curAudioObject.pause();
    }

    const newAudioObject = new Audio(previewUrl);
    this.currentPreview = newAudioObject;

    newAudioObject.play();
    newAudioObject.volume = 0.05;
  }

  // Actual render
  render() {
    return (
      <div className="app">
        <SearchBar getAlbums={ this.getAlbums }/>
        <main className="app__content">
          <AlbumList albums={ this.state.albums } getTracks={ this.getTracks }/>
          <TrackList tracks={ this.state.tracks } playPreview={ this.playPreview }/>
        </main>
      </div>
    );
  }
}

// const headerHeight = document.querySelector('.app__header').offsetHeight || '200px';

// App.styles = {
//   content: {
//     height: `calc(100vh - ${headerHeight}px)`,
//   },
// };

export default App;
