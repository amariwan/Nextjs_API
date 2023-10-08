import React from 'react';
import { Flex, Box, Spinner, Button } from '@chakra-ui/react';
import { useStarshipsContext } from '@/context/StarshipsContext';
import StarshipCard from './StarshipCard';

const CardList = () => {
	const { starships, setShowCount, setPage, isLoading, searchQuery, isSuccess, isFetching } =
		useStarshipsContext();

	const handleLoadMore = () => {
		setShowCount((prevCount) => prevCount + 10);
		setPage((prevPage) => prevPage + 1);
	};

	const filteredStarships = starships.filter(
		(starship) =>
			starship.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			starship.model.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<Box mt='12'>
			{isLoading ? (
				<Flex justifyContent='center' alignItems='center' m='10'>
					<Spinner
						size='lg'
						thickness='4px'
						speed='0.50s'
						emptyColor='white'
						color='yellow.500'
					/>
					<Box p='3' color='whiteAlpha.300'>
						Starships are loading...
					</Box>
				</Flex>
			) : isSuccess && filteredStarships.length === 0 ? (
				<Box mt='20' color='white'>
					No Starships found!
				</Box>
			) : (
				<Flex gap='20' justifyContent='center' flexWrap='wrap' mb='6' mt='5'>
					{isSuccess &&
						filteredStarships.map((starship, index) => (
							<StarshipCard starship={starship} key={index} />
						))}
				</Flex>
			)}
			{!isLoading && isSuccess && (
				<Button
					_hover={{
						backgroundColor: 'whiteAlpha.300',
					}}
					backgroundColor='whiteAlpha.200'
					color='whiteAlpha.800'
					p='25px'
					onClick={handleLoadMore}
					isDisabled={isLoading || isFetching || filteredStarships.length === 36}
				>
					{isLoading ? (
						<Spinner
							size='lg'
							thickness='4px'
							speed='0.75s'
							emptyColor='white'
							color='yellow.500'
						/>
					) : (
						'Load More'
					)}
				</Button>
			)}
		</Box>
	);
};

export default CardList;
