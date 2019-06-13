import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../Apis/Youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {

    state = {videos: [], selectedVideo: null};

    componentDidMount() {
        this.search('chuck noris');
    }

    search = async (searchText) => {
        const response = await Youtube.get('/search', {params: {q: searchText}});
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.search}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide computer sixteen wide mobile column">
                            <VideoDetails video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide computer sixteen wide mobile column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
