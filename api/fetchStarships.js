import axios from 'axios';

export const fetchStarships = async (searchTerm, page, showCount) => {
	try {
		const encodedSearchTerm = encodeURIComponent(searchTerm);
		const encodedPage = encodeURIComponent(page);
		const encodedShowCount = encodeURIComponent(showCount);

		const response = await axios.get(
			`https://swapi.dev/api/starships/?search=${encodedSearchTerm}&page=${encodedPage}&limit=${encodedShowCount}`,
		);

		if (response.status === 200) {
			return response.data;
		} else {
			throw new Error('Failed to fetch starships data');
		}
	} catch (error) {
		throw new Error('An error occurred while fetching starships data: ' + error.message);
	}
};
