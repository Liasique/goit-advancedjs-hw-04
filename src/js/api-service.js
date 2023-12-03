import axios from 'axios';

const API_KEY = '40966348-f4e9f35e28aff5be5c3c45d6f';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(search, page = 1) {
  try {
    const params = {
      key: API_KEY,
      q: search,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: 40,
    };

    const response = await axios.get(BASE_URL, { params });
    if (response.status !== 200) {
      throw new Error('Error fetching images');
    }

    return response.data;
  } catch (error) {
    console.error('Error in fetchImages:', error);
  }
}
