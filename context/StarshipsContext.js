import { createContext, useContext } from 'react';
import { useState } from 'react';
import { fetchStarships } from '@/api/fetchStarships';
import { useQuery } from 'react-query';

export const StarshipsContext = createContext();
export const useStarshipsContext = () => useContext(StarshipsContext);

const StarshipsProvider = ({ children }) => {
	const [starships, setStarships] = useState([]);
	const [page, setPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState('');
	const [showCount, setShowCount] = useState(10);
	const [favorite, setFavorite] = useState([]);

	const { isLoading, data, isSuccess, isFetching } = useQuery(
		['starships', page, searchQuery, showCount],

		() => fetchStarships(searchQuery, page, showCount),
		{
			keepPreviousData: true,
			onSuccess: (data) => {
				if (data && data.results) {
					if (page === 1) {
						setStarships(data.results);
					} else {
						setStarships((prevStarships) => [...prevStarships, ...data.results]);
					}
				}
			},
		},
	);
	//console.log(starships)
	//console.log(page,searchQuery);

	function handleAddFavorite(starship) {
		const newFavorites = [...favorite, starship];
		setFavorite(newFavorites);
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
	}
	const removeFavorite = (starship) => {
		const newFavorites = favorite.filter((item) => item.name !== starship.name);
		setFavorite(newFavorites);
		localStorage.setItem('favorites', JSON.stringify(newFavorites));
	};
	//console.log(favorite);

	const values = {
		starships,
		setStarships,
		isLoading,
		data,
		page,
		setPage,
		showCount,
		setShowCount,
		searchQuery,
		setSearchQuery,
		isSuccess,
		handleAddFavorite,
		favorite,
		setFavorite,
		removeFavorite,
		isFetching,
	};

	return <StarshipsContext.Provider value={values}>{children}</StarshipsContext.Provider>;
};

export default StarshipsProvider;
