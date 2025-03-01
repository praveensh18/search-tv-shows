import axios from 'axios';
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from './fake-data';
import {BASE_URL} from '../config';

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}`);
		return response.data.results
		// return FAKE_POPULARS
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}`);
		return response.data.results
		// return FAKE_RECOMMENDATIONS
  }

  static async searchTVShow(name) {
    const response = await axios.get(`${BASE_URL}/search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${name}`);
    return response.data.results;
  }
}
