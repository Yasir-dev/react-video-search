import axios from 'axios';

const KEY = "AIzaSyCfK7sFojT-EZndFGDQKxTS67Uh4xxdx2w";

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
